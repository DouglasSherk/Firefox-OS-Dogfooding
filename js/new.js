$(document).ready(function() {
  // Mark all articles that are less than 3 days old as "new".
  $('a[data-date]').each(function() {
    var date = Date.parse($(this).data('date').slice(0, 10));
    if (new Date().getTime() - date < 259200000) {
      $(this).html('<span class="label label-success">New</span> ' +
                   $(this).html());
    }
  });
});
