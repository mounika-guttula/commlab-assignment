// Get all buttons with the class "openDialogButton"
var openDialogButtons = document.querySelectorAll(".openDialogButton");

// Get the modal and close button elements
var myModal = document.getElementById("myModal");
var closeDialogButton = document.getElementById("closeDialogButton");

// Function to open the dialog
function openDialog() {
    myModal.style.display = "block";
}

// Function to close the dialog
function closeDialog() {
    myModal.style.display = "none";
}

// Add click event listeners to all "Open Dialog" buttons
openDialogButtons.forEach(function(button) {
    button.addEventListener("click", openDialog);
});

// Add click event listener to the "Close" button
closeDialogButton.addEventListener("click", closeDialog);