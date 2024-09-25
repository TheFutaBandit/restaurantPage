import { homeScreenBootup } from "./homePage"
import { menuScreen } from "./menuPage";
import { aboutScreen } from "./aboutPage";


const webpageLoader = (() => {
    const home = document.querySelector(".home");
    const menu = document.querySelector(".menu");
    const about = document.querySelector(".about");

    homeScreenBootup();

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
        menuScreen();
    })

    about.addEventListener("click", () => {
        clearPage();
        aboutScreen();
    })
})();