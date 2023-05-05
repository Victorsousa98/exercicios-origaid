const linksInternos = document.querySelectorAll('nav a[href^="#"]');

if (linksInternos) {
  function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    //   const topo = section.offsetTop;

    //   window.scrollTo({
    //     top: topo,
    //     behavior: "smooth",
    //   });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
