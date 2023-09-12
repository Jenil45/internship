const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");

function setSidebar() {
    sidebar.classList.toggle("sidebar-active");
    main.classList.toggle("main-active");
}