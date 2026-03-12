// Wait for DOM to load before querying elements.
document.addEventListener("DOMContentLoaded", () => {
  // Get the mobile menu button.
  const toggleBtn = document.querySelector(".nav-toggle");
  // Get the navigation link list.
  const navLinks = document.querySelector(".nav-links");

  // Stop if required elements are missing.
  if (!toggleBtn || !navLinks) {
    return;
  }

  // Toggle the mobile menu open/closed on button click.
  toggleBtn.addEventListener("click", () => {
    // Show/hide the link list by toggling the class.
    navLinks.classList.toggle("open");
  });

  // Close the menu when any nav link is clicked.
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      // Hide the link list.
      navLinks.classList.remove("open");
    });
  });

  // Lightbox for image cards.
  const lightboxTargets = document.querySelectorAll(
    ".gallery-grid img, .card img, .service-card img"
  );

  if (lightboxTargets.length > 0) {
    const overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";
    overlay.innerHTML = '<img class="lightbox-image" alt="">';
    document.body.appendChild(overlay);

    const overlayImage = overlay.querySelector(".lightbox-image");

    const closeLightbox = () => {
      overlay.classList.remove("open");
      document.body.classList.remove("no-scroll");
      overlayImage.src = "";
      overlayImage.alt = "";
    };

    lightboxTargets.forEach((img) => {
      img.classList.add("clickable-image");
      img.addEventListener("click", () => {
        overlayImage.src = img.currentSrc || img.src;
        overlayImage.alt = img.alt || "Suurennettu kuva";
        overlay.classList.add("open");
        document.body.classList.add("no-scroll");
      });
    });

    overlay.addEventListener("click", closeLightbox);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
    });
  }
});
