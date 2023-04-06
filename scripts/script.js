const darkThemeButtonRef = document.querySelector(".darkThemeButton")

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