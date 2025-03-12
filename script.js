let lagreButtonEl = document.querySelector("#lagreForm")
let gjoremalListeEl = document.querySelector("#gjoremalListe")
let overskriftArray = []
let infoArray = []
let viktighetArray = []


function getLocal() { 
    let savedOverskriftArray = localStorage.getItem("overskrift")
    let savedInfoArray = localStorage.getItem("info")
    let savedViktighetArray = localStorage.getItem("viktighet")

    let overskriftArrayNy = JSON.parse(savedOverskriftArray)
    let infoArrayNy = JSON.parse(savedInfoArray)
    let viktighetArrayNy = JSON.parse(savedViktighetArray)

    for (let i = 0; i < overskriftArrayNy.length; i++) {
        let nyOverskrift = document.createElement("h1")
        let nyInfo = document.createElement("p")
        let nyViktighet = document.createElement("h4")
    
        nyOverskrift.textContent = overskriftArrayNy[i]
        nyInfo.textContent = infoArrayNy[i]
        nyViktighet.textContent = viktighetArrayNy[i]
    
        gjoremalListeEl.appendChild(nyOverskrift)
        gjoremalListeEl.appendChild(nyInfo)
        gjoremalListeEl.appendChild(nyViktighet)
    
    }
}

if (localStorage.getItem("overskrift") === null){
    console.log("Hello, first time visitor")
} else {
getLocal()
console.log("Welcome back!")
}

function addFormToArray() {
        let overskrift = document.querySelector("#overskrift").value;
        let info = document.querySelector("#info").value;
        let viktighet = document.querySelector("#viktighet").value;

        overskriftArray.push(overskrift)
        infoArray.push(info)
        viktighetArray.push(viktighet)

        let stringifiedOverskrift = JSON.stringify(overskriftArray)
        let stringifiedInfo = JSON.stringify(infoArray)
        let stringifiedViktighet = JSON.stringify(viktighetArray)
        
        localStorage.setItem("overskrift", stringifiedOverskrift)
        localStorage.setItem("info", stringifiedInfo)
        localStorage.setItem("viktighet", stringifiedViktighet)

        let nyOverskrift = document.createElement("h1")
        let nyInfo = document.createElement("p")
        let nyViktighet = document.createElement("h4")

        nyOverskrift.textContent = overskrift
        nyInfo.textContent = info
        nyViktighet.textContent = viktighet

        gjoremalListeEl.appendChild(nyOverskrift)
        gjoremalListeEl.appendChild(nyInfo)
        gjoremalListeEl.appendChild(nyViktighet)
}

lagreButtonEl.addEventListener("click", () => {
    if (localStorage.getItem("overskrift") === null){
        addFormToArray()
    } else {
    let savedOverskriftArray = localStorage.getItem("overskrift")
    let savedInfoArray = localStorage.getItem("info")
    let savedViktighetArray = localStorage.getItem("viktighet")

    overskriftArray = JSON.parse(savedOverskriftArray)
    infoArray = JSON.parse(savedInfoArray)
    viktighetArray = JSON.parse(savedViktighetArray)

    addFormToArray()
    }
})

function clearGjoremal() {
    localStorage.removeItem("overskrift", "info", "viktighet")
    location.reload()
}

document.querySelector("#clearForm").addEventListener("click", clearGjoremal)

// let fjernGjoremalKnapp = document.querySelector("#fjernGjoremal")

// function ferdigGjoremal() {
    
// }

// fjernGjoremalKnapp.addEventListener("click", ferdigGjoremal)

