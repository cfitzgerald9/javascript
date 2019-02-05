document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction);

document.querySelector("#activate-mindreading").addEventListener("click", mindReadingFunction);

document.querySelector("#activate-xray").addEventListener("click", xrayFunction);

function flightHandlerFunction(){
   const flightSection = document.querySelector("#flight")
   flightSection.classList.replace("disabled", "enabled");
}

function mindReadingFunction(){
    const mindReadingSection = document.querySelector("#mindreading")
    mindReadingSection.classList.replace("disabled", "enabled");
}

function xrayFunction(){
    const xraySection = document.querySelector("#xray")
    xraySection.classList.replace("disabled", "enabled");
}

document.querySelector("#activate-all").addEventListener("click", activateAllFunction)
document.querySelector("#deactivate-all").addEventListener("click", deactivateAllFunction)

function activateAllFunction(){
    const allOfEm = document.querySelectorAll(".power");
    allOfEm.forEach()

    }
}