// This file will grow as we build the website.
// For now, it's intentionally left blank.
// ==============================
// MOBILE NAVIGATION
// ==============================

const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});


/* ========================================
   ACCOMMODATION PHOTO SLIDER
======================================== */

document.querySelectorAll(".accommodation-slider").forEach(slider => {

    const track = slider.querySelector(".slider-track");
    const slides = slider.querySelectorAll(".slide");
    const prevButton = slider.querySelector(".slider-prev");
    const nextButton = slider.querySelector(".slider-next");
    const counter = slider.querySelector(".slider-counter");

    let currentSlide = 0;
    let touchStartX = 0;
    let touchEndX = 0;

    function showSlide(index) {
        currentSlide = (index + slides.length) % slides.length;

        track.style.transform =
            `translateX(-${currentSlide * 100}%)`;

        counter.textContent =
            `${currentSlide + 1} / ${slides.length}`;
    }

    nextButton.addEventListener("click", () => {
        showSlide(currentSlide + 1);
    });

    prevButton.addEventListener("click", () => {
        showSlide(currentSlide - 1);
    });

    // Swipe support for mobile

    track.addEventListener("touchstart", event => {
        touchStartX = event.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener("touchend", event => {
        touchEndX = event.changedTouches[0].screenX;

        const distance = touchEndX - touchStartX;

        if (Math.abs(distance) > 50) {
            if (distance < 0) {
                showSlide(currentSlide + 1);
            } else {
                showSlide(currentSlide - 1);
            }
        }
    }, { passive: true });

    showSlide(0);

});
