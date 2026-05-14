

// Jednostavna validacija forme
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Hvala Vam! Vaša poruka je uspešno poslata.');
    this.reset();
});