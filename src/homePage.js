import wings_image from "./images/wings.jpg"

export const homeScreenBootup = (() => {

    const content = document.querySelector("#content");

    const main_title = document.createElement("h1");
    main_title.classList.add("main_title")
    main_title.textContent = "Wingstop Bar"
    content.appendChild(main_title);

    const menu = document.createElement("div");
    menu.classList.add("menu");
    content.appendChild(menu);

    const menu_items = document.createElement("div");
    menu_items.classList.add("menu-items");
    menu_items.textContent = "I love Chicken Wings. Moreover, I love the absolute flavour variety. Not to mention when you dip it in sauce oh my fucking god the taste. too good.";
    menu.appendChild(menu_items);

    const menu_timings = document.createElement("div");
    menu_timings.classList.add("menu-timings");
    menu_timings.textContent = "24/7";
    menu.appendChild(menu_timings);

    const menu_location = document.createElement("div");
    menu_location.classList.add("menu-location");
    menu_location.textContent = "123-Location, Hello Boulevard, New Park";
    menu.appendChild(menu_location);

    const img_wings = document.createElement("img");
    img_wings.classList.add("wings");
    img_wings.src = wings_image;
    menu.appendChild(img_wings);

});