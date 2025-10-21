document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.classList.toggle("active", isOpen);
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        siteNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.classList.remove("active");
      });
    });
  }

  document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        const yOffset = -70;
        const rect = target.getBoundingClientRect();
        const offsetTop = rect.top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  const heroContainer = document.querySelector(".hero-highlights");
  const heroCards = heroContainer ? Array.from(heroContainer.querySelectorAll(".hero-card")) : [];
  const heroDots = Array.from(document.querySelectorAll(".hero-dot"));

  if (heroContainer && heroCards.length > 1 && heroDots.length === heroCards.length) {
    let heroIndex = heroCards.findIndex((card) => card.classList.contains("is-active"));
    heroIndex = heroIndex >= 0 ? heroIndex : 0;
    const ROTATION_MS = 15000;
    let heroTimer = null;

    const setActiveHero = (nextIndex, userInitiated = false) => {
      if (nextIndex === heroIndex) {
        if (userInitiated) restartHeroTimer();
        return;
      }

      const previousIndex = heroIndex;
      heroCards[previousIndex].classList.remove("is-active");
      heroDots[previousIndex].classList.remove("is-active");
      heroDots[previousIndex].setAttribute("aria-selected", "false");
      heroDots[previousIndex].setAttribute("tabindex", "-1");

      heroIndex = nextIndex;
      heroCards[heroIndex].classList.add("is-active");
      heroDots[heroIndex].classList.add("is-active");
      heroDots[heroIndex].setAttribute("aria-selected", "true");
      heroDots[heroIndex].setAttribute("tabindex", "0");
      heroContainer.setAttribute("data-active-index", String(heroIndex));

      if (userInitiated) {
        heroDots[heroIndex].focus();
        restartHeroTimer();
      }
    };

    const restartHeroTimer = () => {
      if (heroTimer) {
        clearInterval(heroTimer);
      }
      heroTimer = setInterval(() => {
        const nextIndex = (heroIndex + 1) % heroCards.length;
        setActiveHero(nextIndex);
      }, ROTATION_MS);
    };

    heroContainer.setAttribute("data-active-index", String(heroIndex));
    heroDots.forEach((dot, idx) => {
      dot.setAttribute("tabindex", idx === heroIndex ? "0" : "-1");
      dot.setAttribute("aria-selected", idx === heroIndex ? "true" : "false");
    });
    restartHeroTimer();

    heroDots.forEach((dot, idx) => {
      dot.addEventListener("click", () => {
        setActiveHero(idx, true);
      });

      dot.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          const direction = event.key === "ArrowRight" ? 1 : -1;
          const nextIndex = (heroIndex + direction + heroCards.length) % heroCards.length;
          setActiveHero(nextIndex, true);
        }
      });
    });

    [heroContainer, ...heroDots].forEach((element) => {
      element.addEventListener("mouseenter", () => {
        if (heroTimer) {
          clearInterval(heroTimer);
        }
      });
      element.addEventListener("mouseleave", () => {
        restartHeroTimer();
      });
    });
  }

  const toTopButton = document.querySelector(".to-top");
  if (toTopButton) {
    const toggleToTopVisibility = () => {
      if (window.scrollY > 400) {
        toTopButton.classList.add("is-visible");
      } else {
        toTopButton.classList.remove("is-visible");
      }
    };

    window.addEventListener("scroll", toggleToTopVisibility, { passive: true });
    toggleToTopVisibility();

    toTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      toTopButton.blur();
    });
  }
});
