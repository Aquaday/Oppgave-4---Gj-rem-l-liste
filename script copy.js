// Triple array Funker ikke?

let lagreButtonEl = document.querySelector("#lagreForm")
let gjoremalListeEl = document.querySelector("#gjoremalListe")
let gjoremalArray = []

function getLocal() { 
    let gjoremalArrayNy = JSON.parse(localStorage.getItem("gjoremal"))

    for (let i = 0; i < gjoremalArrayNy.length; i++) {
        let nyGjoremal = document.createElement("h1")
        let nyButton = document.createElement("button")
    
        nyGjoremal.textContent = gjoremalArrayNy[i]
        nyButton.textContent = "Fjern meg"

        gjoremalListeEl.appendChild(nyGjoremal)
        nyGjoremal.appendChild(nyButton)
    }
}

if (localStorage.getItem("gjoremal") === null){
    console.log("Hello, first time visitor")
} else {
getLocal()
console.log("Welcome back!")
}

function addFormToArray() {
        let gjoremal = document.querySelector("#gjoremal").value;

        gjoremalArray.push(gjoremal)

        let stringifiedGjoremal = JSON.stringify(gjoremalArray)
        
        localStorage.setItem("gjoremal", stringifiedGjoremal)

        let nyGjoremal = document.createElement("h1")
        let nyButton = document.createElement("button")

        nyGjoremal.textContent = gjoremal
        nyButton.textContent = "Fjern meg"

        gjoremalListeEl.appendChild(nyGjoremal)
        nyGjoremal.appendChild(nyButton)
    

}

lagreButtonEl.addEventListener("click", () => {
    if (localStorage.getItem("gjoremal") === null){
        addFormToArray()
    } else {
    let savedGjoremalArray = localStorage.getItem("gjoremal")

    gjoremalArray = JSON.parse(savedGjoremalArray)

    addFormToArray()
    }
})

function clearGjoremal() {
    localStorage.removeItem("gjoremal")
    location.reload()
}

function removeSingle() {
    console.log("hello")
}

// function removeParent(e) {
//     e.parentElement.remove()
// }


document.querySelector("#clearForm").addEventListener("click", clearGjoremal)

