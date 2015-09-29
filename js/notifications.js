if (navigator.push) {
  var req = navigator.push.register();

  req.onsuccess = function(e) {
    var endpoint = req.result;

    console.log('*****');
    console.log(endpoint);
  };

  req.onerror = function(e) {
    console.error("Error getting a new endpoint: " + JSON.stringify(e));
  };

  console.log('setting push handler');
  navigator.mozSetMessageHandler('push', function(e) {
    console.log('My endpoint is ' + e.pushEndpoint);
    console.log('My new version is ' +  e.version);
  });

  console.log('setting push-register handler');
  navigator.mozSetMessageHandler('push-register', function(e) {
    console.log('push-register received, I need to register my endpoint(s) again!');

    var req = navigator.push.register();
    req.onsuccess = function(e) {
      var endpoint = req.result;
      console.log("New endpoint: " + endpoint );
    }

    req.onerror = function(e) {
      console.error("Error getting a new endpoint: " + JSON.stringify(e));
    }
  });
}
