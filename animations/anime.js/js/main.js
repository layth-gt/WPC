const title = document.querySelector("#title");
title.addEventListener("click", animateTtile);

function animateTtile() {
  var cssSelector = anime({
    targets: "#title",
    translateY: 100,
    direction: "alternate",
    loop: 2,
    elasticity: function(el, i, l) {
      return 200 + i * 200;
    }
  });
}

var lineDrawing = anime({
  targets: "#logo .lines path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1500,
  delay: function(el, i) {
    return i * 250;
  },
  direction: "alternate",
  loop: 3
});
