const categories_titles_dom = document.querySelectorAll('.articles .category .name');
const nav_list_items_dom = document.querySelectorAll('.nav-list .nav-list-item');

const mobile_nav_btn = document.querySelector('.mobile-nav-btn');

// Categories collapse and uncollapse
categories_titles_dom.forEach(title => {

    title.addEventListener('click', () => {
        title.parentElement.classList.toggle('collapsed');
    });

});

// Uncollapse when clicking in nav-links
nav_list_items_dom.forEach(link => {

    link.addEventListener('click', (e) => {
        e.preventDefault();
        let target = document.querySelector(`.articles .category.${link.dataset.className}`);

        if (target.classList.contains('collapsed')) {
            target.classList.remove('collapsed');
            target.addEventListener('transitionstart', () => {
                window.location.replace(link.href);
            })
        } else {
            window.location.replace(link.href);
        }
    });

});

// Mobile Navigation burger button
mobile_nav_btn.addEventListener('click', () => {

    mobile_nav_btn.classList.toggle('cancel');

});