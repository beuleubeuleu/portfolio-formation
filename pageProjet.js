// I will be creating a different pen with touch support but right // now I have no time for it due to school

const slides = document.querySelectorAll(".projet-component");
const button = document.querySelectorAll(".button");

const projectNumber = document.querySelector(".nombre-projet")
const description = document.querySelector(".description-projets")
const descriptions = [
    "Intégration d'une maquette figma avec quelques fonctionnalités javascript, cela à été mon premier projet qui inclue du HTML et du CSS et m'investir pleinement dedans m'a permis de vite me familiariser avec la syntaxe.",
    "CV que j'ai réalisé pour ma recherche de stage, j'ai eu l'occasion de réaliser mon premier design sur figma. Les transitions et les positions ont été challenging à implementer mais c'est aussi ca que j'aime dans le developpement, la decouverte de nouvelles fonctionnalités et l'aventure qui suit.",
    "Generateur de citation, introduction au DOM. L'exercice a été fait de sorte a devoir faire des itérations pour valider des tickets",
    "Exercice de DOM en HTML CSS JS, le piment de celui-ci pour moi était de gérer les messages d'erreur en fonction du texte rempli par l'utilisateur, ainsi que le côté responsive qui m'a posé problème à cause des positions de la carte bleu interactive"
]
const projectLinks = [
    "https://beuleu-maquette-simplon.netlify.app/",
    "https://beuleu-cv.netlify.app/",
    "https://beuleu-selfcare-center.netlify.app/",
    "https://beuleu-interactive-card-details.netlify.app/"
]
let checkItOut = document.querySelector(".link-active-project :first-child")


let current = 0;
let prev = 4;
let next = 1;

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => i === 0 ? gotoPrev() : gotoNext());
}

projectNumber.textContent = `${current+1}/${slides.length}`
console.log(checkItOut)
checkItOut.href = projectLinks[current]



const gotoNum = number => {
    current = number;
    prev = current - 1;
    next = current + 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].classList.remove("prev");
        slides[i].classList.remove("next");
    }

    if (next === slides.length) {
        next = 0;
    }

    if (prev === -1) {
        prev = slides.length-1;
    }

    slides[current].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");
    description.textContent = descriptions[current]
    projectNumber.textContent = `${current+1}/${slides.length}`
    checkItOut.href = projectLinks[current]
}


const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () => current < slides.length-1 ? gotoNum(current + 1) : gotoNum(0);