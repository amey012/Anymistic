let currentTransition = 'fade';
let currentDuration = 2; 
let currentEasing = 'ease';


const transitionItems = document.querySelectorAll('.animations-list li');
transitionItems.forEach(item => {
  item.addEventListener('click', function() {
    currentTransition = this.getAttribute('data-transition');
    resetAnimations();
  });
});

const durationInput = document.getElementById('duration');
const easingSelect = document.getElementById('easing');

durationInput.addEventListener('input', () => {
  currentDuration = parseFloat(durationInput.value);
  resetAnimations();
});


easingSelect.addEventListener('change', () => {
  currentEasing = easingSelect.value;
  resetAnimations();
});


window.addEventListener('scroll', applyAnimationsOnScroll);

function applyAnimationsOnScroll() {
  const sections = document.querySelectorAll('.section-to-animate');
  const windowHeight = window.innerHeight;
  let offsetTrigger = 75;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < windowHeight - offsetTrigger) {
      section.style.setProperty('--duration', `${currentDuration}s`);
      section.style.setProperty('--easing', currentEasing);
      section.classList.add('animated', currentTransition);
    }
    // else{
    //   section.classList.remove('animated', currentTransition);
    // }
  });
}

function resetAnimations() {
  document.querySelectorAll('.section-to-animate').forEach(section => {
    section.classList.remove('fade', 'slide', 'zoom', 'rotate', 'flip', 'animated', 'slide-in-left', 'slide-in-right', 'slide-in-top', 'slide-in-bottom', 'slide-bothways');
    section.style.removeProperty('--duration');
    section.style.removeProperty('--easing');
  });
}

// Highlight
transitionItems.forEach(item => {
  item.addEventListener('click', function () {
    currentTransition = this.getAttribute('data-transition');
    transitionItems.forEach(e => e.classList.remove('highlighted'));
    this.classList.add('highlighted');
    // setTimeout(() => {
    //   this.classList.remove('highlighted');
    // }, 9000);

    resetAnimations();
  });
});






//Scroll
window.onscroll = function () {
  const btn = document.getElementById("scrollTopBtn");
  btn.style.display =
    document.body.scrollTop > 100 || document.documentElement.scrollTop > 100
      ? "block"
      : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}