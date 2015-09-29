// If Push API exists, then this page has been installed as an app. If it
// doesn't, then it's being viewed as regular web content. Show the installation
// banner in this case.
if (!navigator.push) {
  $('#installBanner').removeClass('hide');
}

$('#installBtn').click(function(e) {
  navigator.mozApps.install('https://foxfooding.github.io/manifest.webapp');
});
