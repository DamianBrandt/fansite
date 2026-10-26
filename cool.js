let menuitem = document.querySelectorAll(".menu-item, .menu-item2");
menuitem.forEach(function (item) {
  item.addEventListener("click", function () {
    item.style.color = "red";
  });
  let origineleTekst = item.innerHTML;
  item.addEventListener("mouseenter", function () {
    item.innerHTML = "GA NU HIER HEEN";
  });
  item.addEventListener("mouseleave", function () {
    item.innerHTML = origineleTekst;
  });
});

let knop = document.getElementById("knop");
if (knop) {
knop.addEventListener("click", function () {
  knop.style.color = "red";
  let antwoord = document.getElementById("antwoord").value;
  if (antwoord == "ja") {
    window.location.href = "https://www.youtube.com/watch?v=xVsL4VvgeuE";
  }else if (antwoord == "nee") {
    window.location.href = "https://www.thuisarts.nl/psychische-klachten-bij-volwassenen/ik-heb-lichte-psychische-klachten-hoe-ga-ik-me-beter-voelen";
  }
});
}