import honey_wings from "./images/honey_wings.png"
import mango_wings from "./images/mango_wings.png"
// import wings_image from "./images/wings.jpg"

export const menuScreen = (() => {

    const content = document.querySelector("#content");

    function menu_item(item_name, item_image, item_description) {
        const item_name_node = document.createElement("div");
        item_name_node.classList.add(item_name.replace(/\s+/g,''));

        const item_name_title = document.createElement("h2");
        item_name_title.textContent = item_name;

        const item_name_description = document.createElement("p");
        item_name_description.textContent = item_description;

        content.appendChild(item_name_node);

        const image = document.createElement("img");
        image.src = item_image;
        image.height = 400;
        image.width = 500;

        item_name_node.appendChild(item_name_title);
        item_name_node.appendChild(item_name_description);
        item_name_node.appendChild(image);
    }

    const main_title = document.createElement("h1");
    main_title.classList.add("main_title")
    main_title.textContent = "Menu"
    content.appendChild(main_title);

    menu_item("Honey Wings",honey_wings, "THE BEST FUCKING HONEY COATED WINGS RAHHHH");
    menu_item("Mango-Habanaro Wings",mango_wings, "Mango Habanero wings look at them THEY LOOK BANGING");

});