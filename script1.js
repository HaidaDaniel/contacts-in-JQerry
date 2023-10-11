$(document).ready(function () {
    $("#add-contact").click(function () {
        var name = $("#name").val();
        var phone = $("#phone").val();

        if (name && phone) {
            var listItem = $("<li>");
            listItem.html(name + " - " + phone);
            var deleteButton = $("<button class='delete-button'>Delete</button>");
            deleteButton.click(function () {
                listItem.remove();
            });
            listItem.append(deleteButton);
            $("#contact-list").append(listItem);

            $("#name").val("");
            $("#phone").val("");
        }
    });
});
