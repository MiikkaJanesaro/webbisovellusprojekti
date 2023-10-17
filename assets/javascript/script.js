document.addEventListener("DOMContentLoaded", function () {
    const goToTopButton = document.getElementById("goToTop");
    const goToEndButton = document.getElementById("goToEnd");
    const moottoripyorailyButton = document.getElementById('goToMoottoripyoraily');
    const punttisaliButton = document.getElementById('goToPunttisali');

    goToTopButton.addEventListener("click", scrollToTop);
    goToEndButton.addEventListener("click", scrollToEnd);
    moottoripyorailyButton.addEventListener("click", scrollToMoottoripyoraily);
    punttisaliButton.addEventListener("click", scrollToPunttisali);

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function scrollToEnd() {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }

    function scrollToMoottoripyoraily() {
        scrollToSection("moottoripyöräily");
    }

    function scrollToPunttisali() {
        scrollToSection("punttisali");
    }

    function scrollToSection(sectionId) {
        const targetSection = document.getElementById(sectionId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const checkNameButton = document.getElementById("checkName");
    const resultElement = document.getElementById("result");

    const correctName = "Tanska";

    checkNameButton.addEventListener("click", function () {
        const enteredName = document.getElementById("name").value;

        if (enteredName === correctName) {
            resultElement.textContent = "Onneksi olkoon! Vastaus oli oikea!";
        } else {
            resultElement.textContent = "Väärin meni!";
        }
    });
});
