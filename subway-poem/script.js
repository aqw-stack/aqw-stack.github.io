// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  // gsap code here!

  // Here's the code for the horizontal scroll
  // gets the wrapper class
  const wrapper = document.querySelector(".wrapper");

  //counts how many sections there are inside the .wrapper class
  const sections = gsap.utils.toArray(".wrapper section");

  let scrollTween1 = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".wrapper",
      pin: true,
      scrub: 1,
      end: "+=8000",
      markers: true,
    },
  });

  //closing gsap wrapper
});
