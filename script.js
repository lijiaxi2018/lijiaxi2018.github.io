const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function setActiveLink(sectionId) {
  navLinks.forEach((link) => {
    const linkSection = link.getAttribute("data-section");

    if (linkSection === sectionId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

function updateActiveLinkOnScroll() {
  const headerOffset = 100;
  const scrollPosition = window.scrollY + headerOffset;

  let currentSectionId = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      currentSectionId = section.getAttribute("id");
    }
  });

  setActiveLink(currentSectionId);
}

window.addEventListener("scroll", updateActiveLinkOnScroll);
window.addEventListener("load", updateActiveLinkOnScroll);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const sectionId = link.getAttribute("data-section");
    setActiveLink(sectionId);
  });
});