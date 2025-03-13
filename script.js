// Triple array Funker ikke?

let lagreButtonEl = document.querySelector("#lagreForm")
let gjoremalListeEl = document.querySelector("#gjoremalListe")
let overskriftArray = []
let infoArray = []
let viktighetArray = []
let gjoremalClass = "Hei"

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
        let nyButton = document.createElement("button")
    
        nyOverskrift.textContent = overskriftArrayNy[i]
        nyInfo.textContent = infoArrayNy[i]
        nyViktighet.textContent = viktighetArrayNy[i]
        nyButton.textContent = "Fjern meg"

        nyOverskrift.setAttribute("class", gjoremalClass)
        nyInfo.setAttribute("class", gjoremalClass)
        nyViktighet.setAttribute("class", gjoremalClass)
        nyButton.setAttribute("onclick", () => {
            }
        )

        gjoremalClass += "1"

        gjoremalListeEl.appendChild(nyOverskrift)
        gjoremalListeEl.appendChild(nyInfo)
        gjoremalListeEl.appendChild(nyViktighet)
        nyViktighet.appendChild(nyButton)
    
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

        nyOverskrift.setAttribute("class", gjoremalClass)
        nyInfo.setAttribute("class", gjoremalClass)
        nyViktighet.setAttribute("class", gjoremalClass)

        gjoremalClass += 1

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

function removeSingle() {
    console.log("hello")
}

// document.querySelector(".removeME").addEventListener("click", () => { 
//     document.querySelector(".removeME").parentElement.style.display = "none"
// }
// )


document.querySelector("#clearForm").addEventListener("click", clearGjoremal)


// Nytt forsøk___________________________________________________________________________________________


// let lagreButtonEl = document.querySelector("#lagreForm")
// let gjoremalListeEl = document.querySelector("#gjoremalListe")

// let gjoremalArray = []
// let gjoremalClass = 0

// function getLocal() { 
//     let savedGjoremalArray = localStorage.getItem("gjoremalArray")

//     let gjoremalArrayNy = JSON.parse(savedGjoremalArray)

//     for (let i = 0; i < gjoremalArrayNy.length; i++) {
//         let nyGjoremal = document.createElement("h1")
    
//         nyGjoremal.textContent = gjoremalArrayNy[i]

//         nyGjoremal.setAttribute("class", gjoremalClass)

//         gjoremalClass += 1

//         gjoremalListeEl.appendChild(nyGjoremal)
//     }
// }

// if (localStorage.getItem("gjoremalArray") === null){
//     console.log("Hello, first time visitor")
// } else {
// getLocal()
// console.log("Welcome back!")
// }

// function addFormToArray() {
//         let gjoremal = document.querySelector("#overskrift").value;

//         gjoremalArray.push(gjoremal)

//         let stringifiedGjoremal = JSON.stringify(gjoremalArray)
        
//         localStorage.setItem("gjoremalArray", stringifiedGjoremal)

//         let nyGjoremal = document.createElement("h1")

//         nyGjoremal.textContent = gjoremal

//         nyGjoremal.setAttribute("class", gjoremalClass)

//         gjoremalClass += 1

//         gjoremalListeEl.appendChild(nyGjoremal)
// }

// lagreButtonEl.addEventListener("click", () => {
//     if (localStorage.getItem("gjoremalArray") === null){
//         addFormToArray()
//     } else {
//     let savedGjoremalArray = localStorage.getItem("gjoremalArray")

//     gjoremalArray = JSON.parse(savedGjoremalArray)

//     addFormToArray()
//     }
// })

// function removeSingle() {

// }