const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const particles = [];
const numParticles = 150;

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
  particles.forEach(p => {
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

window.addEventListener('scroll', () => {
    const title = document.querySelector('.sticky-title');
    const scrollPosition = window.pageYOffset;
    title.style.transform = `translateX(calc(-30% + ${scrollPosition * 0.3}px))`;
    title.style.opacity = 0.2 + (scrollPosition * 0.004);
  });