let lagreButtonEl = document.querySelector("#lagreForm")
let gjoremalListeEl = document.querySelector("#gjoremalListe")
let overskriftArray = []
let infoArray = []
let viktighetArray = []


function getLocal() { 
    const savedOverskriftArray = localStorage.getItem("overskrift")
    const savedInfoArray = localStorage.getItem("info")
    const savedViktighetArray = localStorage.getItem("viktighet")

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

lagreButtonEl.addEventListener("click", () => {
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

    

})

function clearGjoremal() {
    localStorage.removeItem("overskrift")
    localStorage.removeItem("info")
    localStorage.removeItem("viktighet")
    location.reload()
}

document.querySelector("#clearForm").addEventListener("click", clearGjoremal)

// if (overskriftArray.length === 0) {
//     console.log("hello")
// } else {
// for (let i = 0; i < overskriftArray.length; i++) {
//     let nyOverskrift = document.createElement("h1")
//     let nyInfo = document.createElement("p")
//     let nyViktighet = document.createElement("h4")

//     nyOverskrift.textContent = overskriftArray[i]
//     nyInfo.textContent = infoArray[i]
//     nyViktighet.textContent = viktighetArray[i]

//     gjoremalListeEl.appendChild(nyOverskrift)
//     gjoremalListeEl.appendChild(nyInfo)
//     gjoremalListeEl.appendChild(nyViktighet)

// }}


