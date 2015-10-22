function sendPushUrl(data) {
  var url = data.url;

  var getUuid = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      var r = window.crypto.getRandomValues(new Uint32Array(1))[0] % 16,
          v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  };

  var sendEndpoint = function(endpoint) {
    console.log('New endpoint:', endpoint);
    var endpointId = endpoint.replace('https://updates.push.services.mozilla.com/push/', '');
    $.ajax({
      method: 'POST',
      url: url,
      data: {
        uuid: uuid,
        endpoint: endpointId
      }
    });
  };

  var getIconURI = function() {
    var icons = window.Foxfooding.manifest.icons;
    if (!icons) {
      return null;
    }

    var sizes = Object.keys(icons).map(function parse(str) {
      return parseInt(str, 10);
    });
    sizes.sort(function(x, y) { return y - x; });

    var HVGA = document.documentElement.clientWidth < 480;
    var index = sizes[HVGA ? sizes.length - 1 : 0];
    return window.Foxfooding.installOrigin + icons[index];
  };

  var checkPostsAndGenerateNotification = function(data) {
    var lastSeen = localStorage.getItem('lastPost');
    if (lastSeen && lastSeen === JSON.stringify(data[0])) {
      return;
    }

    var post = data[0];
    var type = post.type.charAt(0).toUpperCase() + post.type.slice(1);

    if (localStorage.getItem('notifications') === "true" &&
        localStorage.getItem('notifications-' + post.type) === "true") {
      var notification = new Notification('Foxfooding ' + type, {
        icon: post.icon || getIconURI(),
        body: post.title
      });

      notification.onclick = function() {
        parent.postMessage(post.url, '*');
        window.Foxfooding.launch();
	notification.close();
      };
    }
    
    localStorage.setItem('lastPost', JSON.stringify(post));
  };

  var uuid = localStorage.getItem('uuid') || getUuid();
  localStorage.setItem('uuid', uuid);

  var req = navigator.push.register();

  req.onsuccess = function(e) {
    var endpoint = req.result;
    sendEndpoint(endpoint);
  };

  req.onerror = function(e) {
    console.error("Error getting a new endpoint", e);
  };

  navigator.mozSetMessageHandler('push', function(e) {
    console.log('Got a push notification');

    $.ajax({
      url: 'posts.json',
      success: checkPostsAndGenerateNotification,
      dataType: 'json'
    });
  });

  navigator.mozSetMessageHandler('push-register', function(e) {
    console.log('Got a push notification re-register message');

    var req = navigator.push.register();

    req.onsuccess = function(e) {
      var endpoint = req.result;
      console.log("New endpoint: " + endpoint );
      sendEndpoint(endpoint);
    }

    req.onerror = function(e) {
      console.error("Error getting a new endpoint", e);
    }
  });
}

if (navigator.push) {
  var request = navigator.mozApps.getSelf();

  request.onsuccess = function(event) {
    window.Foxfooding = event.target.result;

    $.ajax({
      url: 'push-server.json',
      success: sendPushUrl,
      dataType: 'json'
    });
  };

  request.onerror = function(e) {
    console.error('Error getting this app', e);
  };
}
