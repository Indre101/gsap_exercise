"use strict";
import { gsap } from "gsap";
function moveBall() {
  gsap.to(document.querySelector(".ball"), {
    x: 400,
    duration: 2
  });
}

const tl = gsap.timeline();
sequince();
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
