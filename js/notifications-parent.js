window.addEventListener('message', function(e) {
  if (typeof e.data == 'string') {
    window.location.href = e.data;
  }
});
