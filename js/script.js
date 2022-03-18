const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
}
cancelBtn.onclick = () => {
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
}
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}


// filtering portfolio images
const filters = document.querySelectorAll('.filter');

filters.forEach(filter => {

    filter.addEventListener('click', function () {

        let selectedFilter = filter.getAttribute('data-filter');
        let itemsToHide = document.querySelectorAll(`.projects .project:not([data-filter='${selectedFilter}'])`);
        let itemsToShow = document.querySelectorAll(`.projects [data-filter='${selectedFilter}']`);

        if (selectedFilter == 'all') {
            itemsToHide = [];
            itemsToShow = document.querySelectorAll('.projects [data-filter]');
        }

        itemsToHide.forEach(el => {
            el.classList.add('hide');
            el.classList.remove('show');
        });

        itemsToShow.forEach(el => {
            el.classList.remove('hide');
            el.classList.add('show');
        });

    });
});