document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const navList = document.querySelector(".nav-list");
  const hamburger = document.querySelector(".hamburger");
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");

  if (mobileMenuToggle && navList) {
    mobileMenuToggle.addEventListener("click", () => {
      const isActive = navList.classList.toggle("active");
      hamburger.style.background = isActive ? "transparent" : "#0A2540";
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navList.classList.remove("active");
        hamburger.style.background = "#0A2540";
      });
    });
  }

  const handleScroll = () =>
    header.classList.toggle("scrolled", window.scrollY > 20);
  window.addEventListener("scroll", handleScroll);
  handleScroll();

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector("button");
      const originalText = btn.textContent;

      btn.textContent = "Message Sent!";
      btn.style.cssText = "background-color: #28a745; border-color: #28a745;";
      contactForm.reset();

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.cssText = "";
      }, 3000);
    });
  }
});
