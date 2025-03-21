const toDoList = document.querySelector("#gjoremalListe")

const toDoItem = document.createElement("li")

const lagreButtonEl = document.querySelector("#lagreForm")

const userInput = document.querySelector("#gjoremal").value

toDoItem.textContent = userInput

lagreButtonEl.addEventListener("click", function () {

    toDoList.appendChild(toDoItem)
})



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