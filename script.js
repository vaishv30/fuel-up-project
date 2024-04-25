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
    trigger: ".part-2",
    start: "50% 50%",
    end: "200% 50%",
    pin: true,
    scrub: 1,
    // markers: true
  },
});
tl4.to(
  ".navbar",
  {
    color: "black",
  },
  "sct-1"
);
tl4.to(
  ".rght-part-2",
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
let valuedisplays = document.querySelectorAll(".numbers");
let interval = 5000;

valuedisplays.forEach((valuedisplay) => {
  let startvalue = 0;
  let endvalue = parseInt(valuedisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endvalue);
  console.log(duration);
  let counter = setInterval(function () {
    startvalue += 1;
    valuedisplay.textContent = startvalue;
    if (startvalue == endvalue) {
      clearInterval(counter);
    }
  }, duration);
});



document.addEventListener("DOMContentLoaded", function () {
    const services = [
        {
            title: "Car Towing",
            description: "Need a hand with your vehicle? Our expert team is here to provide seamless car towing services. Whether you're stuck on the bustling streets of Mumbai or the serene roads of Kerala, we'll swiftly tow your car to safety, ensuring minimal hassle for you.",
            image: "Assests/p.png",
        },
        {
            title: "Roadside Assistance",
            description: "From the bustling city roads to the quiet countryside, our roadside assistance is just a call away. Whether you need a tire change, a jump start, or fuel delivery, our efficient team will reach you promptly, providing reliable support to get you back on the road in no time.",
            image: "Assests/accident.png",
        },
        {
            title: "Vehicle Recovery",
            description: "Has your vehicle met with an unexpected mishap? Our vehicle recovery service is here to lend a helping hand. With our skilled professionals and state-of-the-art equipment, we'll recover your vehicle from any situation, ensuring minimal disruption to your journey.",
            image: "Assests/fire.png",
        },
        {
            title: "Vehicle Recovery",
            description: "From the bustling city roads to the quiet countryside, our roadside assistance is just a call away. Whether you need a tire change, a jump start, or fuel delivery, our efficient team will reach you promptly, providing reliable support to get you back on the road in no time.",
            image: "Assests/motocycle.png",
        },
        {
            title: "Vehicle Recovery",
            description: "Has your vehicle met with an unexpected mishap? Our vehicle recovery service is here to lend a helping hand. With our skilled professionals and state-of-the-art equipment, we'll recover your vehicle from any situation, ensuring minimal disruption to your journey.",
            image: "Assests/flood.png",
        },
        {
            title: "Vehicle Recovery",
            description: "Has your vehicle met with an unexpected mishap? Our vehicle recovery service is here to lend a helping hand. With our skilled professionals and state-of-the-art equipment, we'll recover your vehicle from any situation, ensuring minimal disruption to your journey.",
            image: "Assests/hail.png",
        },
    ];
    
    const serviceRow = document.getElementById("serviceRow");

    services.forEach(service => {
      const col = document.createElement("div");
      col.classList.add("col");

      const img = document.createElement("img");
      img.src = service.image;
      img.alt = "";

      const serviceContent = document.createElement("div");
      serviceContent.classList.add("service-content");

      const serviceTitle = document.createElement("div");
      serviceTitle.classList.add("service-title");
      serviceTitle.textContent = service.title;

      const serviceDesc = document.createElement("div");
      serviceDesc.classList.add("service-desc");
      serviceDesc.textContent = service.description;

      serviceContent.appendChild(img);
      serviceContent.appendChild(serviceTitle);
      serviceContent.appendChild(serviceDesc);

      col.appendChild(serviceContent);
      serviceRow.appendChild(col);
    });
  });