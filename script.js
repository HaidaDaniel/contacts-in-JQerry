document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const addContactButton = document.getElementById("add-contact");
    const contactList = document.getElementById("contact-list");

    addContactButton.addEventListener("click", function () {
        const name = nameInput.value;
        const phone = phoneInput.value;

        if (name && phone) {
            const listItem = document.createElement("li");
            listItem.textContent = name + " - " + phone;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete-button");

            deleteButton.addEventListener("click", function () {
                contactList.removeChild(listItem);
            });

            listItem.appendChild(deleteButton);
            contactList.appendChild(listItem);

            nameInput.value = "";
            phoneInput.value = "";
        }
    });
});