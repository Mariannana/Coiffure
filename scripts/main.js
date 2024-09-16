const selectBoxs = document.querySelectorAll(".select-box");

selectBoxs.forEach(selectBox => {
    const selected = selectBox.lastElementChild;
    const selectedDisplay = selected.querySelector("span");
    const optionsContainer = selectBox.querySelector(".options-container");
    const optionsList = selectBox.querySelectorAll(".option");

    selected.addEventListener("click", () => {
        optionsContainer.classList.toggle("active");
    });
    
    optionsList.forEach(o => {
        o.addEventListener("click", () => {
            selectedDisplay.innerHTML = o.querySelector("label").innerHTML;
            optionsContainer.classList.remove("active");
        });
    });
})

function setSelectedNavigation() {
    const navbarActive = $('#mainNav .active');
    const navbarIdentification = $('#navIndication');
    console.log(navbarActive.offset());

    navbarIdentification.css('left', navbarActive.offset().left+(navbarActive.width()*.2));
    navbarIdentification.css('top', navbarActive.position().bottom);
};

setSelectedNavigation();