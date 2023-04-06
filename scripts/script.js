const darkThemeButtonRef = document.querySelector(".darkThemeButton")
const cancelButtonRef = document.querySelector(".cancelButton")
const newNoteButtonRef = document.querySelector(".newNote_Save_Button")
const textAreaRef = document.querySelector("#sectionItem2")
const cancelSaveButtonRef = document.querySelector("#sectionItem3")

const notesArray = []

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
    textAreaRef.style.visibility = "hidden"
    cancelSaveButtonRef.style.visibility = "hidden"
}

cancelButtonRef.addEventListener("click", removeButton)

function visible(){
    const textAreaValue = document.querySelector("#note")
    textAreaVisibility = textAreaRef.style.visibility
    cancelSaveButtonVisibility = textAreaRef.style.visibility

    if (textAreaVisibility === "hidden" && cancelSaveButtonVisibility === "hidden"){
        textAreaRef.style.visibility = "visible"
        cancelSaveButtonRef.style.visibility = "visible"
        textAreaValue.value = ""
    }

}
newNoteButtonRef.addEventListener("click", visible)

const noteOne = {
    title : "note one",
    body : "this is my first note"
}

const noteTwo = {
    title : "note two",
    body : "this is my second note"
}

notesArray.push(noteOne, noteTwo)

console.log(notesArray)

