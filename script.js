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
          description: "Duis laboris ball tip jowl sed. Drumstick leberkas tenderloin swine laborum cupim bacon ipsum jowl meatball t-bone.",
          image: "Assests/p.png",
        },
        {
          title: "Roadside Assistance",
          description: "Pork chop tenderloin brisket. Capicola tri-tip sausage alcatra leberkas, beef ribs rump short loin. Filet mignon t-bone doner cow.",
          image: "Assests/accident.png",
        },
        {
          title: "Vehicle Recovery",
          description: "Strip steak turkey prosciutto exercitation cillum elit. Enim ham velit aute jerky ras. Anim landjaeger andouille.",
          image: "Assests/fire.png",
        },
        {
            title: "Vehicle Recovery",
            description: "Strip steak turkey prosciutto exercitation cillum elit. Enim ham velit aute jerky ras. Anim landjaeger andouille.",
            image: "Assests/motocycle.png",
          },
          {
            title: "Vehicle Recovery",
            description: "Strip steak turkey prosciutto exercitation cillum elit. Enim ham velit aute jerky ras. Anim landjaeger andouille.",
            image: "Assests/flood.png",
          },
          {
            title: "Vehicle Recovery",
            description: "Strip steak turkey prosciutto exercitation cillum elit. Enim ham velit aute jerky ras. Anim landjaeger andouille.",
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