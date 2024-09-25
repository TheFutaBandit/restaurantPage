import honey_wings from "./images/honey_wings.png"
// import wings_image from "./images/wings.jpg"

export const menuScreen = (() => {

    const content = document.querySelector("#content");

    function menu_item(item_name, item_image, item_description) {
        const item_name_node = document.createElement("div");
        item_name_node.classList.add(item_name);


        item_name_node.textContent = item_description;

        content.appendChild(item_name_node);

        const image = document.createElement("img");
        image.src = item_image;
        image.height = 400;
        image.width = 500;

        item_name_node.appendChild(image);
    }

    const main_title = document.createElement("h1");
    main_title.classList.add("main_title")
    main_title.textContent = "Menu"
    content.appendChild(main_title);

    menu_item("honeyWings",honey_wings, "THE BEST FUCKING HONEY COATED WINGS RAHHHH");

});