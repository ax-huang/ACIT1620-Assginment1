const darkThemeButtonRef = document.querySelector(".darkThemeButton")
const cancelButtonRef = document.querySelector(".cancelButton")

function darkThemeMode(){
    const sideBarRef = document.querySelector("aside")
    const bodyRef = document.querySelector("body")

    bodyRef.classList.toggle("noteDarkBG")
    sideBarRef.classList.toggle("sidebarDarkBG")

    if(darkThemeButtonRef.textContent != "Dark Theme"){
        darkThemeButtonRef.textContent = "Dark Theme"
    }
    else{
        darkThemeButtonRef.textContent = "Light Theme"
    }
    darkThemeButtonRef.classList.toggle("lightThemeButtonBG")
}

darkThemeButtonRef.addEventListener("click", darkThemeMode)

function removeButton(){
    const textAreaRef = document.querySelector("#sectionItem2")
    const cancelSaveButtonRef = document.querySelector("#sectionItem3")
    textAreaRef.style.visibility = "hidden"
    cancelSaveButtonRef.style.visibility = "hidden"
}

cancelButtonRef.addEventListener("click", removeButton)