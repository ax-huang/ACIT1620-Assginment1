const darkThemeButtonRef = document.querySelector(".darkThemeButton")
const cancelButtonRef = document.querySelector(".cancelButton")
const newNoteButtonRef = document.querySelector(".newNote_Save_Button")
const textAreaRef = document.querySelector("#sectionItem2")
const cancelSaveButtonRef = document.querySelector("#sectionItem3")
const textAreaValue = document.querySelector("#note")
const noteContainter = document.querySelector("#noteSection")
const saveButtonRef = document.querySelector("#saveButton")

const notesArray = [{title : "note one", body : "this is my first note"}, {title : "note two", body : "this is my second note"}]

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

function removeButton(){
    textAreaRef.style.visibility = "hidden"
    cancelSaveButtonRef.style.visibility = "hidden"
}

function visible(){
    let textAreaVisibility = textAreaRef.style.visibility
    let cancelSaveButtonVisibility = cancelSaveButtonRef.style.visibility

    if (textAreaVisibility === "hidden" && cancelSaveButtonVisibility === "hidden"){
        textAreaRef.style.visibility = "visible"
        cancelSaveButtonRef.style.visibility = "visible"
    }
    else{
        textAreaValue.value = ""
    }
}

function collectNoteInfo(){
    let userInput = prompt("Title for this note")

    const note = {
        title : userInput,
        body : textAreaValue.value
    }

    notesArray.push(note)
    addNote(note)
    textAreaValue.value = ""
}

function addNote(note){
    let newLi = document.createElement("li")
    newLi.textContent = note.title

    noteContainter.appendChild(newLi)
}

function loadNote(event){
    let titleNote = event.target.textContent

    for (item of notesArray){
        if(item.title === titleNote){
            textAreaValue.value = item.body
        }
    }
}

cancelButtonRef.addEventListener("click", removeButton)
newNoteButtonRef.addEventListener("click", visible)
darkThemeButtonRef.addEventListener("click", darkThemeMode)
saveButtonRef.addEventListener("click", collectNoteInfo)
noteContainter.addEventListener("click", loadNote)




