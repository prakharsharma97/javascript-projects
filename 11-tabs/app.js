
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tan-btn");
const article = document.querySelectorAll(".content");
about.addEventListener("click",function (e) {
    const id =e.target.dataset.id;
    if (id) {
        btns.forEach(function (btn) {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");

        article.forEach(function (article) {
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});

