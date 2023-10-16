document.addEventListener("DOMContentLoaded", function () {
    
    const goToTopButton = document.getElementById("goToTop");
    const goToEndButton = document.getElementById("goToEnd");

    
    goToTopButton.addEventListener("click", scrollToTop);
    goToEndButton.addEventListener("click", scrollToEnd);

    //scrollataan alkuun smuuthisti ("smooth")
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    //scrollataan loppuun smuuthisti ("smooth")
    function scrollToEnd() {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
});
