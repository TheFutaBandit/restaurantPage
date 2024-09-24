import wings_image from "./wings.jpg"

import { homeScreenBootup } from "./homepage"


const webpageLoader = (() => {
    const home = document.querySelector(".home");
    const menu = document.querySelector(".menu");
    const about = document.querySelector(".about");

    function clearPage() {
        const content = document.querySelector("#content");
        content.textContent = "";
    }

    home.addEventListener("click", () => {
        clearPage();
        homeScreenBootup();
    })

    menu.addEventListener("click", () => {
        clearPage();
        homeScreenBootup();
    })

    about.addEventListener("click", () => {
        clearPage();
        homeScreenBootup();
    })
})();