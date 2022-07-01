window.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider"),
    line1 = document.querySelector("#line1"),
    line2 = document.querySelector("#line2"),
    line3 = document.querySelector("#line3"),
    line4 = document.querySelector("#line4"),
    active = document.querySelector("#active"),
    container = document.querySelector(".container");

  line1.addEventListener("click", () => {
    slider.style.transform = "translateX(0)";
    active.style.top = 0;
    container.style.background = "burlywood";
  });

  line2.addEventListener("click", () => {
    slider.style.transform = "translateX(-25%)";
    active.style.top = "80px";
    container.style.background = "#22046b";
  });

  line3.addEventListener("click", () => {
    slider.style.transform = "translateX(-50%)";
    active.style.top = "160px";
    container.style.background = "#6b0436";
  });

  line4.addEventListener("click", () => {
    slider.style.transform = "translateX(-75%)";
    active.style.top = "240px";
    container.style.background = "#046b26";
  });
});
