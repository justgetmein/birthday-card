gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

ScrollTrigger.create({
  trigger: ".blank", // Trigger on the first blank page
  start: "top top", // Pin when the top of .blank hits top of viewport
  pin: true, // Pin the .blank page
  pinSpacing: false, // Critical: Allows .main to slide up and cover .blank
  animation: gsap.to(".main", {
    borderTopLeftRadius: "0%", // Straighten top-left corner
    borderTopRightRadius: "0%", // Straighten top-right corner
    ease: "power1.inOut", // Smooth transition for the rounding
  }),
  scrub: true, // Link this animation directly to scroll progress
});

const cloudFloat = () => {
  const tlCloud = new TimelineMax({ repeat: -1 });
  /*Cloud Animation*/
  tlCloud

    .to(".cloud > img", 3, {
      y: "-=20",
      // rotation: "+=5",
      ease: Power1.easeInOut,
    })

    .to(".cloud > img", 3, {
      y: "+=20",
      // rotation: "+=5",
      ease: Power1.easeInOut,
    })

    .to(".cloud > img", 3, {
      y: "-=10",
      ease: Power1.easeInOut,
    })

    .to(".cloud > img", 3, {
      y: "+=10",
      ease: Power1.easeInOut,
    })

    .to(".cloud > img", 3, {
      y: "-=30",
      ease: Power1.easeInOut,
    })

    .to(".cloud > img", 3, {
      y: "+=30",
      ease: Power1.easeInOut,
    })

    .to(".cloud > img", 3, {
      y: "-=30",
      ease: Power1.easeInOut,
    })

    .to(".cloud > img", 3, {
      y: "+=30",
      ease: Power1.easeInOut,
    })

    .to(".cloud > img", 2, {
      y: "-=30",
      ease: Power1.easeInOut,
    })

    .to(".cloud > img", 2, {
      y: "+=30",
      ease: Power1.easeInOut,
    });

  // TweenLite.to(tlCloud, 27, { ease: Power1.easeInOut });
};
cloudFloat();

const balloons = document.querySelectorAll(".balloon > img");

const randomX = random(10, 20);
const randomY = random(20, 30);
const randomDelay = random(0, 1);
const randomTime = random(3, 5);
const randomTime2 = random(5, 10);
const randomAngle = random(8, 12);

TweenLite.set(balloons, {
  x: randomX(-1),
  y: randomX(1),
  rotation: randomAngle(-1),
});

balloons.forEach((balloon) => {
  moveX(balloon, 1);
  moveY(balloon, -1);
  rotate(balloon, 1);
});

function rotate(target, direction) {
  TweenLite.to(target, randomTime2(), {
    rotation: randomAngle(direction),
    // delay: randomDelay(),
    ease: Sine.easeInOut,
    onComplete: rotate,
    onCompleteParams: [target, direction * -1],
  });
}

function moveX(target, direction) {
  TweenLite.to(target, randomTime(), {
    x: randomX(direction),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1],
  });
}

function moveY(target, direction) {
  TweenLite.to(target, randomTime(), {
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1],
  });
}

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}

const cakeFloat = () => {
  const tlCake = new TimelineMax({ repeat: -1 });
  /*Cake Animation*/
  tlCake

    .to(".cake > img", 3, {
      y: "-=30",
      rotation: "+=5",
      ease: Power1.easeInOut,
    })

    .to(".cake > img", 3, {
      y: "+=30",
      rotation: "-=5",
      ease: Power1.easeInOut,
    })

    .to(".cake > img", 3, {
      y: "-=30",
      rotation: "-=5",
      ease: Power1.easeInOut,
    })

    .to(".cake > img", 3, {
      y: "+=30",
      rotation: "+=5",
      ease: Power1.easeInOut,
    })

    .to(".cake > img", 3, {
      y: "-=30",
      rotation: "+=5",
      ease: Power1.easeInOut,
    })

    .to(".cake > img", 3, {
      y: "+=30",
      rotation: "-=5",
      ease: Power1.easeInOut,
    })

    .to(".cake > img", 3, {
      y: "-=30",
      rotation: "-=5",
      ease: Power1.easeInOut,
    })

    .to(".cake > img", 3, {
      y: "+=30",
      rotation: "+=5",
      ease: Power1.easeInOut,
    })

    .to(".cake > img", 2, {
      y: "-=30",
      rotation: "+=5",
      ease: Power1.easeInOut,
    })

    .to(".cake > img", 2, {
      y: "+=30",
      rotation: "-=5",
      ease: Power1.easeInOut,
    });
};
cakeFloat();

var cloudScroll = gsap.timeline({
  scrollTrigger: {
    trigger: ".lower",
    start: "top top",
    end: "bottom top",
    scrub: 0.6,
    // markers: true,
  },
});

cloudScroll
  .to(".lowercloud1", { x: "170vw", ease: "none" }, 0)
  .to(".lowercloud2", { x: "-170vw", ease: "none" }, 0)
  .to(".lowercloud3", { x: "170vw", ease: "none" }, 0)
  .to(".lowercloud4", { x: "-170vw", ease: "none" }, 0);

const Cloudtl = new TimelineMax({});
Cloudtl.add("start");

const cloud8Sequence = gsap.timeline({ repeat: -1, yoyo: true }); // Loop the entire sequence
cloud8Sequence
  .to(".bodycloud8 > img", 3, { x: 20, ease: "none" }) // Use "none" for linear ease in GSAP 3.x
  .to(".bodycloud8 > img", 3, { x: 0, ease: "none" })
  .to(".bodycloud8 > img", 3, { x: -20, ease: "none" })
  .to(".bodycloud8 > img", 3, { x: 0, ease: "none" });

// 2. Create a SUB-TIMELINE for bodycloud9's animation sequence
const cloud9Sequence = gsap.timeline({ repeat: -1, yoyo: true }); // Loop the entire sequence
cloud9Sequence
  .to(".bodycloud9 > img", 3, { x: -20, ease: "none" })
  .to(".bodycloud9 > img", 3, { x: 0, ease: "none" })
  .to(".bodycloud9 > img", 3, { x: 20, ease: "none" })
  .to(".bodycloud9 > img", 3, { x: 0, ease: "none" });

const cloud10Sequence = gsap.timeline({ repeat: -1, yoyo: true }); // Loop the entire sequence
cloud10Sequence
  .to(".bodycloud10 > img", 3, { x: 20, ease: "none" }) // Use "none" for linear ease in GSAP 3.x
  .to(".bodycloud10 > img", 3, { x: 0, ease: "none" })
  .to(".bodycloud10 > img", 3, { x: -20, ease: "none" })
  .to(".bodycloud10 > img", 3, { x: 0, ease: "none" });

const cloud11Sequence = gsap.timeline({ repeat: -1, yoyo: true }); // Loop the entire sequence
cloud11Sequence
  .to(".bodycloud11 > img", 3, { x: 20, ease: "none" }) // Use "none" for linear ease in GSAP 3.x
  .to(".bodycloud11 > img", 3, { x: 0, ease: "none" })
  .to(".bodycloud11 > img", 3, { x: -30, ease: "none" })
  .to(".bodycloud11 > img", 3, { x: 0, ease: "none" })
  .to(".bodycloud11 > img", 3, { x: 40, ease: "none" })
  .to(".bodycloud11 > img", 3, { x: 0, ease: "none" });

const cloud12Sequence = gsap.timeline({ repeat: -1, yoyo: true }); // Loop the entire sequence
cloud12Sequence
  .to(".bodycloud12 > img", 3, { x: -20, ease: "none" }) // Use "none" for linear ease in GSAP 3.x
  .to(".bodycloud12 > img", 3, { x: 0, ease: "none" })
  .to(".bodycloud12 > img", 3, { x: 30, ease: "none" })
  .to(".bodycloud12 > img", 3, { x: 0, ease: "none" });

// 3. Add both sub-timelines to your main Cloudtl at the same "start" label
Cloudtl.add(cloud8Sequence, "start");
Cloudtl.add(cloud9Sequence, "start");
Cloudtl.add(cloud10Sequence, "start");
Cloudtl.add(cloud11Sequence, "start");
Cloudtl.add(cloud12Sequence, "start");

const clickMe = document.getElementById("clickMe");
const clickMeAgain = document.getElementById("clickMeAgain");

clickMe.addEventListener("click", () => {
  gsap.to(window, { duration: 1, scrollTo: { y: ".main", autoKill: true } });
});

clickMeAgain.addEventListener("click", () => {
  gsap.to(window, { duration: 1, scrollTo: { y: ".card", autoKill: true } });
});
