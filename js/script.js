
  // ─── NAV SCROLL ───
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  // ─── MOBILE NAV TOGGLE ───
  document.getElementById('navToggle').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
  });

  // ─── SCROLL REVEAL ───
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.1 });
  revealEls.forEach(el => observer.observe(el));

  // ─── SKILL BAR ANIMATION ───
  const barObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.style.width = bar.dataset.width + '%';
        });
        barObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.skill-card').forEach(c => barObserver.observe(c));

  // ─── CONTACT FORM ───
  function handleSend() {

    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const note    = document.getElementById('formNote');
  
    if (!name || !email || !message) {
  
      note.style.color = '#dc2626';
      note.textContent = 'Mohon isi semua field sebelum mengirim.';
      return;
    }
  
    const subject = encodeURIComponent('Pesan Portfolio dari ' + name);
  
    const body = encodeURIComponent(
      'Nama: ' + name + '\n' +
      'Email: ' + email + '\n\n' +
      'Pesan:\n' + message
    );
  
    const gmailURL =
      `https://mail.google.com/mail/?view=cm&fs=1&to=ijaz.shafarin03@gmail.com&su=${subject}&body=${body}`;
  
    window.open(gmailURL, '_blank');
  
    note.style.color = '#16a34a';
    note.textContent = 'Mengarahkan ke Gmail...';
  }
