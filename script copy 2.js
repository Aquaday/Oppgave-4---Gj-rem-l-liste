
const lagreButtonEl = document.querySelector("#lagreForm")

const toDoList = document.querySelector("#gjoremalListe")

lagreButtonEl.addEventListener("click", function (Event) {
    Event.preventDefault()

    const userInput = document.querySelector("#gjoremal").value

    const toDoItem = document.createElement("li")

    toDoItem.textContent = userInput

    toDoList.appendChild(toDoItem)

    document.querySelector("#gjoremal").value = ""


    const deleteButton = document.createElement("button")

    deleteButton.textContent = "Slett"

    toDoItem.appendChild(deleteButton)

    deleteButton.addEventListener("click", function () {
        console.log("slett knapen er trykket!")

        toDoItem.remove()
    })


    const ferdigButton = document.createElement("button")

    ferdigButton.textContent = "Ferdig"

    toDoItem.appendChild(ferdigButton)

    ferdigButton.addEventListener("click", function () {
        
        console.log("finished knappen er trykket!")

        toDoItem.classList.add("finished")

        
    })

    addListToLocal()
    
})

if (localStorage.getItem("toDoList") === null) {
    console.log("Welcome")
} else {
    getListFromLocal()
}


function getListFromLocal() {
    let unstringedToDoList = JSON.parse(localStorage.getItem("toDoList"))

    console.log(unstringedToDoList)

    toDoList.innerHTML = unstringedToDoList


}


function addListToLocal() {
    let toDoListSave = document.querySelector("#gjoremalListe").innerHTML

    console.log(toDoListSave)

    let stringifiedToDoList = JSON.stringify(toDoListSave)

    console.log(stringifiedToDoList)

    localStorage.setItem("toDoList", stringifiedToDoList)
}



