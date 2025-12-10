// Cookie consent handler
window.acceptCookies = function() {
  localStorage.setItem('cookieConsent', 'true');
  document.getElementById('cookieConsent').style.display = 'none';
};

document.querySelector('#app').innerHTML = `
  <header class="header">
    <nav class="nav">
      <div class="logo">
        <img src="https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Park Logo" class="logo-img">
        <h1>Wildlife Reserve</h1>
      </div>
      <div class="nav-links">
        <a href="#about">About</a>
        <a href="#safety">Safety</a>
        <a href="#wildlife">Wildlife</a>
        <a href="#contact">Contact</a>
      </div>
      <button class="mobile-menu" aria-label="Menu">☰</button>
    </nav>
  </header>

  <main>
    <section class="hero">
      <div class="hero-content">
        <h1>Preserving Nature's Legacy</h1>
        <p>A Government Initiative for Wildlife Protection and Conservation</p>
        <div class="hero-buttons">
          <button class="button primary">Plan Your Visit</button>
          <button class="button secondary">Safety Guidelines</button>
        </div>
      </div>
    </section>

    <section id="about" class="section">
      <h2>Our Mission</h2>
      <div class="mission-grid">
        <div class="mission-card">
          <img src="https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg" alt="Conservation">
          <h3>Conservation</h3>
          <p>Protecting endangered species and their habitats through scientific research and monitoring.</p>
        </div>
        <div class="mission-card">
          <img src="https://images.pexels.com/photos/534182/pexels-photo-534182.jpeg" alt="Education">
          <h3>Education</h3>
          <p>Promoting environmental awareness through interactive programs and guided tours.</p>
        </div>
        <div class="mission-card">
          <img src="https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg" alt="Research">
          <h3>Research</h3>
          <p>Conducting vital research to understand and protect wildlife populations.</p>
        </div>
      </div>
    </section>

    <section id="safety" class="section safety-section">
      <h2>Visitor Safety</h2>
      <div class="safety-grid">
        <div class="safety-card">
          <h3>Essential Guidelines</h3>
          <ul>
            <li>Stay on designated trails</li>
            <li>Keep minimum 50m distance from wildlife</li>
            <li>No feeding or approaching animals</li>
            <li>Follow ranger instructions at all times</li>
            <li>Store food in sealed containers</li>
            <li>Carry emergency communication device</li>
          </ul>
        </div>
        <div class="safety-card emergency">
          <h3>Emergency Contacts</h3>
          <div class="emergency-contacts">
            <div class="contact-item">
              <strong>Park Rangers:</strong>
              <span>1800-RANGERS (24/7)</span>
            </div>
            <div class="contact-item">
              <strong>Wildlife Emergency:</strong>
              <span>1800-WILDLIFE</span>
            </div>
            <div class="contact-item">
              <strong>Medical Emergency:</strong>
              <span>911</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="wildlife" class="section wildlife-section">
      <h2>Protected Species</h2>
      <div class="wildlife-grid">
        <div class="wildlife-card">
          <img src="https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg" alt="Tigers">
          <h3>Tigers</h3>
          <p>Critical conservation efforts to protect these magnificent big cats.</p>
        </div>
        <div class="wildlife-card">
          <img src="https://images.pexels.com/photos/133459/pexels-photo-133459.jpeg" alt="Eagles">
          <h3>Eagles</h3>
          <p>Protecting various species of eagles and their nesting sites.</p>
        </div>
        <div class="wildlife-card">
          <img src="https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg" alt="Deer">
          <h3>Deer</h3>
          <p>Maintaining healthy populations of native deer species.</p>
        </div>
      </div>
    </section>

    <section id="contact" class="section contact-section">
      <h2>Contact Us</h2>
      <div class="contact-grid">
        <div class="contact-info">
          <h3>Visit Us</h3>
          <p>Wildlife Reserve Park</p>
          <p>123 Conservation Way</p>
          <p>Nature Valley, NV 12345</p>
          <p>Email: info@wildlifereserve.gov</p>
          <p>Phone: (555) 123-4567</p>
        </div>
        <div class="opening-hours">
          <h3>Opening Hours</h3>
          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
          <p>Saturday - Sunday: 9:00 AM - 5:00 PM</p>
          <p>Last entry 2 hours before closing</p>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Wildlife Reserve Park</h3>
        <p>A Government Initiative for Wildlife Protection</p>
      </div>
      <div class="footer-section">
        <h3>Quick Links</h3>
        <a href="#about">About Us</a>
        <a href="#safety">Safety</a>
        <a href="#wildlife">Wildlife</a>
        <a href="#contact">Contact</a>
      </div>
      <div class="footer-section">
        <h3>Emergency</h3>
        <p>24/7 Helpline: 1800-RANGERS</p>
        <p>Wildlife Emergency: 1800-WILDLIFE</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2024 Wildlife Reserve Park. All rights reserved.</p>
    </div>
  </footer>
`

// Mobile menu functionality
document.querySelector('.mobile-menu').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active');
});