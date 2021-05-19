// let articles_container_dom = document.querySelector('.articles');

// let articles_data = [];

// fetch(`https://gnews.io/api/v4/top-headlines?&token=aba7f2b7eecff457ee36763c6ae7e8df&lang=en&topic=technology`)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         displayArticles(data.articles, 'technology');
//     });

// fetch(`https://gnews.io/api/v4/top-headlines?&token=aba7f2b7eecff457ee36763c6ae7e8df&lang=en&topic=science`)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         displayArticles(data.articles, 'science');
//     });

// fetch(`https://gnews.io/api/v4/top-headlines?&token=aba7f2b7eecff457ee36763c6ae7e8df&lang=en&topic=business`)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         displayArticles(data.articles, 'business');
//     });


// function displayArticles(articles, category) {

//     document.querySelector(`.articles .category.${category} .container`).innerHTML = "";

//     articles.forEach(article => {
//         let article_dom = document.createElement('div');
//         article_dom.classList.add('article');
//         article_dom.innerHTML =
//             `<div class="title">${article.title}</div>
//             <div class="content">${article.content.slice(0, 100)}...</div>`;

//         document.querySelector(`.articles .category.${category} .container`).appendChild(article_dom);
//         document.querySelector(`.articles .category.${category} .name`).textContent = category;
//     })
// }


