

// Jednostavna validacija forme
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Hvala Vam! Vaša poruka je uspešno poslata.');
    this.reset();
});


  window.addEventListener('mouseover', initLandbot, { once: true });
  window.addEventListener('touchstart', initLandbot, { once: true });
  var myLandbot;
  function initLandbot() {
    if (!myLandbot) {
      var s = document.createElement('script');
      s.type = "module"
      s.async = true;
      s.addEventListener('load', function() {
        var myLandbot = new Landbot.Livechat({
          configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-3432712-9VT4L0EZIPDH4JZO/index.json',
        });
      });
      s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs';
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
  }
