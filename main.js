  const fadeElements = document.querySelectorAll('.fade-in-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => observer.observe(el));

  const bg = document.querySelector('.background');

  for (let i = 0; i < 40; i++) {
    const li = document.createElement('li');

    // Random position
    const top = Math.floor(Math.random() * 100);  // 0 to 99
    const left = Math.floor(Math.random() * 100);

    li.style.top = `${top}vh`;
    li.style.left = `${left}vw`;

    // Random animation delay (staggered entry)
    li.style.animationDelay = `${i * 2}s`;

    // Optional: Add variation in border color
    if (i % 3 === 0) {
      li.style.borderColor = "#220511";
    }

    bg.appendChild(li);
  }

const form = document.querySelector('.contact-form');
const confirmation = document.getElementById('confirmation-message');

form?.addEventListener('submit', function (e) {
  e.preventDefault();

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      form.reset();
      showConfirmation('✅ Your message has been sent. Thank you!');
    } else {
      showConfirmation('❌ Something went wrong. Please try again.');
    }
  }).catch(() => {
    showConfirmation('❌ Something went wrong. Please try again.');
  });
});

function showConfirmation(message) {
  confirmation.textContent = message;
  confirmation.classList.add('visible');

  setTimeout(() => {
    confirmation.classList.remove('visible');
  }, 4000);
}

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-links a");

hamburger?.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  hamburger.innerHTML = navMenu.classList.contains("open") ? "&times;" : "&#9776;";
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    hamburger.innerHTML = "&#9776;";
  });
});



