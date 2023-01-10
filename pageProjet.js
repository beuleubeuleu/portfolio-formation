const projects = document.querySelectorAll(".projet-component");
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

projectNumber.textContent = `${current + 1}/${projects.length}`
checkItOut.href = projectLinks[current]


const gotoNum = number => {
    current = number;
    prev = current - 1;
    next = current + 1;

    for (let i = 0; i < projects.length; i++) {
        projects[i].classList.remove("active");
        projects[i].classList.remove("prev");
        projects[i].classList.remove("next");
    }

    if (next === projects.length) {
        next = 0;
    }

    if (prev === -1) {
        prev = projects.length - 1;
    }

    projects[current].classList.add("active");
    projects[prev].classList.add("prev");
    projects[next].classList.add("next");
    description.textContent = descriptions[current]
    projectNumber.textContent = `${current + 1}/${projects.length}`
    checkItOut.href = projectLinks[current]
}


const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(projects.length - 1);

const gotoNext = () => current < projects.length - 1 ? gotoNum(current + 1) : gotoNum(0);

for (let i = 0; i < projects.length; i++) {
    projects[i].addEventListener("mouseover", () => {
        for (let i = 0; i < projects.length; i++) {
            console.log("reset class")
            projects[i].classList.remove("active");
            projects[i].classList.remove("prev");
            projects[i].classList.remove("next");
        }
        projects[i].classList.add("active")
        description.textContent = descriptions[i]
        checkItOut.href = projectLinks[i]
    })
}