$(document).ready(function() {
  var loaded = localStorage.getItem('ever_loaded');
  if (!loaded) {
    localStorage.setItem('notifications', true);
    localStorage.setItem('updates', true);
    localStorage.setItem('issues', true);
    localStorage.setItem('ever_loaded', true);
  }

  var updateCheckboxes = function() {
    var notificationsChecked = $('input[name="notifications"]').is(':checked');

    notificationTypes.forEach(function(nt) {
      if (nt === 'notifications') return;
      var s = 'input[name="' + nt + '"]';
      if (notificationsChecked) {
        $(s).removeAttr('disabled');
      } else {
        $(s).attr('disabled', true);
      }
    });
  };

  var notificationTypes = ['notifications', 'updates', 'news', 'issues'];
  notificationTypes.forEach(function(notificationType) {
    var checked = localStorage.getItem(notificationType) === 'true';
    var selector = 'input[name="' + notificationType + '"]';

    if (checked) $(selector).attr('checked', checked);

    $(selector).change(function() {
      checked = $(selector).is(':checked');
      localStorage.setItem(notificationType, checked);

      updateCheckboxes();
    });
  });

  updateCheckboxes();
});
