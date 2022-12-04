function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}

function LightDark() {
    const LightDark = document.querySelector(".LightDark");
    LightDark.classList.toggle("active");
    var element = document.body;
    element.classList.toggle("dark-mode");
}

 