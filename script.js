const currentPage = document.body.dataset.page;
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
  if (currentPage !== "home") {
    return;
  }

  const headerOffset = 110;
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

if (currentPage === "home") {
  window.addEventListener("scroll", updateActiveLinkOnScroll);
  window.addEventListener("load", updateActiveLinkOnScroll);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const sectionId = link.getAttribute("data-section");

      if (sectionId !== "projects") {
        setActiveLink(sectionId);
      }
    });
  });
}

if (currentPage === "projects") {
  setActiveLink("projects");
}