const categories_headers_dom = document.querySelectorAll('.articles .category .header');
const nav_list_items_dom = document.querySelectorAll('.nav-list .nav-list-item');

const header_dom = document.querySelector('.header');
const mobile_nav_btn = document.querySelector('.mobile-nav-btn');

// Categories collapse and uncollapse
categories_headers_dom.forEach(header => {

    header.addEventListener('click', () => {
        header.parentElement.classList.toggle('collapsed');
    });

});

// Uncollapse when clicking in nav-links
nav_list_items_dom.forEach(link => {

    link.addEventListener('click', (e) => {

        nav_list_items_dom.forEach(element => {
            element.classList.remove('active');
        });

        link.classList.add('active');

        e.preventDefault();
        let target = document.querySelector(`.articles .category.${link.dataset.className}`);
        let done = false;

        if (target.classList.contains('collapsed')) {
            target.classList.remove('collapsed');
        }

        if (header_dom.classList.contains('active')) {
            header_dom.classList.remove('active');
        }

        if (mobile_nav_btn.classList.contains('cancel')) {
            mobile_nav_btn.classList.remove('cancel');
        }

        setTimeout(() => {
            window.location.replace(link.href);
        }, 20)
    });

});

// Mobile Navigation burger button
mobile_nav_btn.addEventListener('click', () => {

    mobile_nav_btn.classList.toggle('cancel');
    header_dom.classList.toggle('active');

});