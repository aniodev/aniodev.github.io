
const openNav = function () {
    const nav = document.querySelector(".nav");
    nav.style.width = "40%";
}

const closeNav = function () {
    const nav = document.querySelector(".nav");
    nav.style.width = "0%";
}

const go = function (url) {
    window.location = `https://${url}`;
}

const copyright = function () {
    const footer = document.querySelector(".aniodev_footer");
    footer.innerHTML = "<p>&copy; By Aniodev - " + new Date().getFullYear();
}

const init = function () {
    copyright();
}

init();


const apicall = function (url) {
    const data = fetch(`media/data/${url}`);
    const el = document.querySelector(".aniodev_article");
    data.then((a) => a.text().then((a) => el.innerHTML = a))
}