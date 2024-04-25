const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
gsap.registerPlugin(ScrollTrigger);


var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".part-4",
      start: "50% 50%",
      end: "200% 50%",
      pin: true,
      scrub: 1,
      // markers: true
    },
  });
  tl4.to(
    ".rght-part-4",
    {
      marginTop: "-15%",
    },
    "sct-1"
  );
  
  tl4.to(
    ".c-one",
    {
      opacity: 1,
    },
    "sct-1"
  );
  tl4.to(
    ".c-two",
    {
      opacity: 1,
    },
    "sct-2"
  );
  tl4.to(
    ".c-one",
    {
      opacity: 0,
      marginTop: "-50%",
    },
    "sct-2"
  );
  tl4.to(
    ".c-three",
    {
      opacity: 1,
    },
    "sct-3"
  );
  tl4.to(
    ".c-one",
    {
      opacity: 0,
      marginTop: "-120%",
    },
    "sct-3"
  );
  tl4.to(
    ".c-two",
    {
      opacity: 0,
    },
    "sct-3"
  );
  tl4.to(
    ".cir-icon",
    {
      marginLeft: "100%",
      rotate: 360,
    },
    "sct-4"
  );
  