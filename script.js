
// Mobile navigation
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
        const open = !mobileMenu.classList.contains("hidden");
        mobileMenu.classList.toggle("hidden");
        menuButton.setAttribute("aria-expanded", String(!open));
    });

    document.querySelectorAll(".mobile-link").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}

// Footer year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
