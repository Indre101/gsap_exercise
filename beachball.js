"use strict";
import { gsap } from "gsap";
function moveBall() {
  gsap.to(document.querySelector(".ball"), {
    x: 400,
    duration: 2
  });
}

const tl = gsap.timeline();
function sequince() {
  tl.to(document.querySelector(".ball"), {
    x: 400,
    rotation: -60,
    duration: 2
  });

  tl.to(document.querySelector(".ball"), {
    scale: 0.1,
    transformOrigin: "bottom",
    duration: 2
  });
}

moveAll();
function moveAll() {
  gsap.fromTo(
    ".ball",
    { y: -400, duration: 2 },
    { y: 0, duration: 2, ease: "elastic", stagger: 0.5 }
  );
}
