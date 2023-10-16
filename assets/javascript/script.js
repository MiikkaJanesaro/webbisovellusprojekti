document.addEventListener("DOMContentLoaded", function () {
    
    const goToTopButton = document.getElementById("goToTop");
    const goToEndButton = document.getElementById("goToEnd");

    
    goToTopButton.addEventListener("click", scrollToTop);
    goToEndButton.addEventListener("click", scrollToEnd);

    
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function scrollToEnd() {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
});
