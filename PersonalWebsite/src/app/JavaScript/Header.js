// JavaScript code in your HTML file
document.addEventListener("DOMContentLoaded", function () {
    var aboutLink = document.querySelector("#aboutLink");
    aboutLink.addEventListener("click", goToAbout);
});

function goToAbout() {
    console.log("dfsdsfsd")
    window.location.href = 'PersonalWebsite\src\app\about\about.component.html'; // Change the URL as needed

}
