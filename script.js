let lagreButtonEl = document.querySelector("#lagreForm")
let gjoremalListeEl = document.querySelector("#gjoremalListe")



lagreButtonEl.addEventListener("click", () => {
    let overskrift = document.querySelector("#overskrift").value;
    let lengreInfo = document.querySelector("#lengreInfo").value;
    let viktighet = document.querySelector("#viktighet").value;

    let nyOverskrift = document.createElement("h1")
    let nyInfo = document.createElement("p")
    let nyViktighet = document.createElement("h4")

    nyOverskrift.textContent = overskrift
    nyInfo.textContent = lengreInfo
    nyViktighet.textContent = viktighet

    gjoremalListeEl.appendChild(nyOverskrift)
    gjoremalListeEl.appendChild(nyInfo)
    gjoremalListeEl.appendChild(nyViktighet)

})