document.addEventListener("DOMContentLoaded", () => {
  const playButtons = document.querySelectorAll(".btn-play");

  playButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".card");
      const img = card.querySelector("img");
      const animation = button.dataset.animation;

      // Remove any previous animation class
      img.classList.remove(animation);
      void img.offsetWidth;
      img.classList.add(animation);

      // Remove
      setTimeout(() => {
        img.classList.remove(animation);
      }, 2000);
    });
  });
});

// Background Animation
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

const particles = [];
const numParticles = 160;

let mouse = { x: null, y: null };

class Particle {
  constructor(index) {
    this.index = index;
    this.reset();
  }

  reset() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.6;
    this.vy = (Math.random() - 0.5) * 0.6;
    this.baseSize = 2 + Math.random() * 1.5;
    this.size = this.baseSize;
    this.opacity = 0.8;
    this.pulsing = Math.random() < 0.4;
    this.time = Math.random() * Math.PI * 2;
  }

  update() {
    // Mouse attraction logic
    if (mouse.x !== null && mouse.y !== null) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 100) {
        this.vx += dx * 0.0055;
        this.vy += dy * 0.0055;
      }
    }

    this.x += this.vx;
    this.y += this.vy;

    if (this.x > width || this.x < 0 || this.y > height || this.y < 0) {
      this.reset();
    }

    if (this.pulsing) {
      this.time += 0.03;
      this.size = this.baseSize + Math.sin(this.time) * 0.5;
    }
  }

  // draw() {
  //   ctx.beginPath();
  //   ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  //   ctx.fillStyle = `rgba(255, 194, 0, ${this.opacity})`;
  //   ctx.fill();
  // }



  draw() {
    // Create gradient
    const gradient = ctx.createRadialGradient(
        this.x, this.y, 0, 
        this.x, this.y, this.size
    );
    gradient.addColorStop(0, `rgba(255, 194, 0, ${this.opacity})`);
    gradient.addColorStop(1, `rgba(255, 100, 0, 0)`);

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
}
}

function initParticles() {
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle(i));
  }
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  particles.forEach((p) => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

initParticles();
animate();

// Code for card animation effect

  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;

      const rect = el.getBoundingClientRect();
      const fullyOut = rect.bottom < 0 || rect.top > window.innerHeight;

      if (entry.isIntersecting) {
        el.classList.add('show'); // Add animation
      } else if (fullyOut) {
        el.classList.remove('show'); // Remove only if completely gone
      } else{
        el.classList.remove('show'); 
      }
    });
  }, {
    threshold: 0.5, // ~30% visible
    rootMargin: "0px 0px 0px 0px" // Optional buffer
  });

  reveals.forEach(el => observer.observe(el));




