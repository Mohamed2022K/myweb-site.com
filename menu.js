const menu = document.getElementById('menu');
const content_menu = document.getElementById('content_menu');

menu.addEventListener("click", () => {
    show_list_menu();
});

function show_list_menu() {
    // alert('H e l l o  !');
    menu.classList.toggle("is-active");
    content_menu.classList.toggle("is-active");
}