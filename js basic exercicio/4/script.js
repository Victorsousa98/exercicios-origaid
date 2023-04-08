const links = Array.from(document.querySelectorAll("nav a"));

function ativarLink(item) {
  links.forEach((item) => {
    if (item.href === document.location.href) {
      item.style.backgroundColor = "Black";
      item.style.color = "white";
    }
  });
}
ativarLink();
