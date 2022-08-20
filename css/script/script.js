"use strict";
const arrow = document.querySelector(".arrow");
const section1 = document.querySelector(".client-testimonials");
arrow.addEventListener("click", function (e) {
  section1.scrollIntoView({
    behavior: "smooth",
  });
});
