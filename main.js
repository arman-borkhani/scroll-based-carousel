gsap.registerPlugin(ScrollTrigger);

const section = document.getElementById('featured-posts');
let maxWidth = 0;

function getMaxWidth() {
  maxWidth = section.offsetWidth;
}

getMaxWidth()
ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

gsap.to(section, {
  x: () => `-${maxWidth - window.innerWidth}`,
  ease: "none",
  scrollTrigger: {
    trigger: ".wrapper",
    pin: true,
    scrub: true,
    end: () => `+=${maxWidth}`,
    invalidateOnRefresh: true
  }
});

ScrollTrigger.create({
  trigger: section,
  start: () => 'top top-=' + (section.offsetLeft - window.innerWidth/2) * (maxWidth / (maxWidth - window.innerWidth)),
  end: () => '+=' + section.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
  toggleClass: {targets: section, className: "active"}
});
