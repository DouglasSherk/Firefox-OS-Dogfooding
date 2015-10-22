$(document).ready(function() {
  var loaded = localStorage.getItem('ever_loaded');
  if (!loaded) {
    localStorage.setItem('notifications', true);
    localStorage.setItem('notifications-update', true);
    localStorage.setItem('notifications-issue', true);
    localStorage.setItem('ever_loaded', true);
  }

  var updateCheckboxes = function() {
    var notificationsChecked = $('input[name="notifications"]').is(':checked');

    notificationTypes.forEach(function(nt) {
      if (nt === 'notifications') return;
      var s = 'input[name="' + nt + '"]';
      if (notificationsChecked) {
        $(s).parent().removeAttr('disabled');
        $(s).removeAttr('disabled');
      } else {
        $(s).parent().attr('disabled', true);
        $(s).attr('disabled', true);
      }
    });
  };

  var notificationTypes = ['notifications', 'notifications-update', 'notifications-news', 'notifications-issue'];
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

  $('input[type="checkbox"]').bootstrapToggle();
  updateCheckboxes();
});
