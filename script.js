document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollButtons();
  initCounters();
  initFAQ();
  initLeaderboardTabs();
});

function initNavigation() {
  const navbar = document.querySelector('[data-navbar]');
  const toggle = document.querySelector('[data-toggle]');
  const menu = document.querySelector('[data-menu]');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
  });

  document.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      menu.classList.remove('active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && menu.classList.contains('active')) {
      toggle.classList.remove('active');
      menu.classList.remove('active');
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });
}

function initScrollButtons() {
  document.querySelectorAll('[data-scroll-to]').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-scroll-to');
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counting')) {
        entry.target.classList.add('counting');
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-counter'));
  const duration = 2000;
  const startTime = Date.now();

  function update() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const current = Math.floor(target * progress);

    if (target > 1000) {
      element.textContent = current.toLocaleString();
    } else {
      element.textContent = current;
    }

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  update();
}

function initFAQ() {
  document.querySelectorAll('[data-faq]').forEach(item => {
    const question = item.querySelector('.faq__question');

    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        document.querySelectorAll('[data-faq]').forEach(el => {
          el.classList.remove('open');
        });

        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });
}

function initLeaderboardTabs() {
  const tabs = document.querySelectorAll('.leaderboard__tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabName = tab.getAttribute('data-tab');

      tabs.forEach(t => t.classList.remove('leaderboard__tab--active'));
      tab.classList.add('leaderboard__tab--active');

      document.querySelectorAll('[data-tab-content]').forEach(content => {
        content.style.display = 'none';
      });

      const targetContent = document.querySelector(`[data-tab-content="${tabName}"]`);
      if (targetContent) {
        targetContent.style.display = 'block';
      }
    });
  });
}