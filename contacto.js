
document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     MOBILE MENU
     ========================================================= */

  const navToggle = document.getElementById("nav-toggle");
  const mainNav = document.getElementById("main-nav");

  if (navToggle && mainNav) {

    const closeMenu = () => {
      navToggle.classList.remove("is-active");

      navToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      navToggle.setAttribute(
        "aria-label",
        "Abrir menú"
      );

      mainNav.classList.remove("is-open");
    };


    const openMenu = () => {
      navToggle.classList.add("is-active");

      navToggle.setAttribute(
        "aria-expanded",
        "true"
      );

      navToggle.setAttribute(
        "aria-label",
        "Cerrar menú"
      );

      mainNav.classList.add("is-open");
    };


    navToggle.addEventListener("click", () => {

      const isOpen =
        navToggle.getAttribute("aria-expanded") === "true";

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }

    });


    mainNav.querySelectorAll("a").forEach((link) => {

      link.addEventListener("click", () => {
        closeMenu();
      });

    });


    document.addEventListener("keydown", (event) => {

      if (event.key === "Escape") {
        closeMenu();
      }

    });


    document.addEventListener("click", (event) => {

      const isOpen =
        navToggle.getAttribute("aria-expanded") === "true";

      if (!isOpen) {
        return;
      }

      const clickedInsideNav =
        mainNav.contains(event.target);

      const clickedToggle =
        navToggle.contains(event.target);

      if (!clickedInsideNav && !clickedToggle) {
        closeMenu();
      }

    });


    window.addEventListener("resize", () => {

      if (window.innerWidth > 760) {
        closeMenu();
      }

    });

  }


  /* =========================================================
     FOOTER YEAR
     ========================================================= */

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

});

