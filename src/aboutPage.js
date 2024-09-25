export const aboutScreen = (() => {
    const content = document.querySelector("#content");

    function contact_item(item_name, item_email, item_description) {
        const item_name_node = document.createElement("div");
        item_name_node.classList.add(item_name);

        content.appendChild(item_name_node);

        const item_name_title = document.createElement("h2");
        item_name_title.textContent = item_name;

        const item_node_email = document.createElement("p");
        item_node_email.textContent = item_email;

        const item_node_description = document.createElement("p");
        item_node_description.textContent = item_description;

        item_name_node.appendChild(item_name_title);
        item_name_node.appendChild(item_node_email);
        item_name_node.appendChild(item_node_description);
    }

    const title = document.createElement("h1");
    title.textContent = "Contact";
    content.appendChild(title);

    contact_item("XQC", "poggers@gmail.com", "dudududududu im the waiter dud")
    contact_item("Forsen", "horse@gmail.com", "forsenDance")
    contact_item("john", "john@gmail.com", "everybody hates john")
})