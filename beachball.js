"use strict";
import { gsap } from "gsap";

function moveBall(params) {
  gsap.to(document.querySelector(".ball"), {
    transform: "translateX(400px)",
    duration: 2
  });
}

rotateBall();
function rotateBall() {
  gsap.to(document.querySelector(".ball"), {
    transform: " rotate(-30deg) translateX(400px)",
    duration: 2
  });
}
