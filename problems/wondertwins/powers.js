document.querySelector("#activate-flight").addEventListener("click", activatePower)

document.querySelector("#activate-mindreading").addEventListener("click", activatePower)

// function flightHandlerFunction(){
//    const flightSection = document.querySelector("#flight")
//    flightSection.classList.replace("disable", "enable");
// }

// function mindReadingFunction(){
//     const mindReadingSection = document.querySelector("#mindreading")
//     mindReadingSection.classList.replace("disable", "enable");
// }

// flightHandlerFunction()
// mindReadingFunction()

function activatePower(event){
    const idOfSection = event.target.id.split("-")[1]   
    const sectionToChange = document.querySelector
    // sectionToChange.classList.replace("disabled", "enabled")
}