document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navList = document.getElementById("nav-list");

    menuToggle.addEventListener("click", function () {
        navList.classList.toggle("show"); 
        const expanded = this.getAttribute("aria-expanded") === "true";
        this.setAttribute("aria-expanded", !expanded);
    });

    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !navList.contains(event.target)) {
            navList.classList.remove("show"); 
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
});
