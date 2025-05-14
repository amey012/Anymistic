fetch("content.json")
  .then((response) => response.json())
  .then((hoverEffects) => {
    const container = document.getElementById("cardContainer");

    hoverEffects.forEach((hover, index) => {
      container.appendChild(createCardElement(hover, index));
    });
    setupScrollReveal();
  })
  .catch((error) => console.error("Error loading hover-effects:", error));

// Card generator function
function createCardElement(hover, index) {
  const card = document.createElement("div");
  card.className = `card ${hover.key}`;
  card.style.setProperty("--i", index + 1);

  card.innerHTML = `
    <div class="firstcard">
      <div class="childcard">
        <img src="/catcus.jpg" alt="${hover.name} example" width="100px" />
      </div>
    </div>
    <b><hr /></b>
    <div class="detailscard">
      <p><b>${hover.name}</b></p>
      <p>${hover.desc}</p>
    </div>
  `;
  return card;
}

// Background Animation
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

const particles = [];
const numParticles = 130;

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

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 194, 0, ${this.opacity})`;
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

// Code for card animation effect - Scroll Up and Down

function setupScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;

        const rect = el.getBoundingClientRect();
        const fullyOut = rect.bottom < 0 || rect.top > window.innerHeight;

        if (entry.isIntersecting) {
          el.classList.add("show"); // Add animation
        }
      });
    },
    {
      threshold: 0.3, // ~30% visible
      rootMargin: "0px 0px 0px 0px", // Optional buffer
    }
  );

  reveals.forEach((el) => observer.observe(el));
}

function scrollDown() {
  window.scrollBy({
    top: window.innerHeight * 0.98,
    behavior: "smooth",
  });
}
