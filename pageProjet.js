const projectsList = document.querySelector(".create-project")
const button = document.querySelectorAll(".button");

const projectNumber = document.querySelector(".nombre-projet")
const description = document.querySelector(".description-projets")

const projectDetails = [
    {
        title: "Intégration Maquette",
        img: "images/integration-preview.png",
        alt: "Maquette basique pour simplon",
        description: "Intégration d'une maquette figma avec quelques fonctionnalités javascript, cela à été mon premier projet qui inclue du HTML et du CSS et m'investir pleinement dedans m'a permis de vite me familiariser avec la syntaxe.",
        link: "https://beuleu-maquette-simplon.netlify.app/"
    },
    {
        title: "CV 2023",
        img: "images/CV-preview.png",
        alt: "cv billy klotz 2023",
        description: "CV que j'ai réalisé pour ma recherche de stage, j'ai eu l'occasion de réaliser mon premier design sur figma. Les transitions et les positions ont été challenging à implementer mais c'est aussi ca que j'aime dans le developpement, la decouverte de nouvelles fonctionnalités et l'aventure qui suit.",
        link: "https://beuleu-cv.netlify.app/"
    },
    {
        title: "Selfcare Center",
        img: "images/selfcare-center-preview.png",
        alt: "projet generateur de citations",
        description: "Generateur de citation, introduction au DOM. L'exercice a été fait de sorte a devoir faire des itérations pour valider des tickets",
        link: "https://beuleu-selfcare-center.netlify.app/"
    },
    {
        title: "Interactive card details",
        img: "images/interactive-card-details-preview.png",
        alt: "exercice manipulation du DOM live feedback",
        description: "Exercice de DOM en HTML CSS JS, le piment de celui-ci pour moi était de gérer les messages d'erreur en fonction du texte rempli par l'utilisateur, ainsi que le côté responsive qui m'a posé problème à cause des positions de la carte bleu interactive",
        link: "https://beuleu-interactive-card-details.netlify.app/"
    },
    {
        title: "Calculatrice",
        img: "images/calculatrice.png",
        alt: "calculatrice preview",
        description: "Simple calculatrice sans style faite dans le cadre de la formation pour perfectionner son javascript",
        link: "https://fem-calculatrice.netlify.app/"
    }
]

class Project {
    title;
    img;
    alt;
    description;
    link;

    // constructor
    constructor(title, img, alt) {
        this.title = title
        this.img = img
        this.alt = alt
    }

    createProjectElement() {
        let projectElement = document.createElement("div")
        projectElement.className = "project-component"
        return projectElement
    }

    addTitleToDOM(projectElement) {
        let divTitle = document.createElement("div")
        divTitle.className = "titre-projet"
        divTitle.innerHTML = this.title
        projectElement.appendChild(divTitle)
    }

    addImgToDOM(projectElement) {
        let imageDiv = document.createElement("img")
        imageDiv.src = this.img
        imageDiv.alt = this.alt
        projectElement.appendChild(imageDiv)
    }
}

const projects = []

for(let project in projectDetails) {
    const projetObj = new Project(projectDetails[project].title, projectDetails[project].img, projectDetails[project].alt);

    const projectComponent =
        projetObj.createProjectElement()
        projetObj.addTitleToDOM(projectComponent)
        projetObj.addImgToDOM(projectComponent)

    if (project === "0") {
        projectComponent.className = "project-component active"
    }
    projects.push(projectComponent)
    projectsList.appendChild(projectComponent)
}

let checkItOut = document.querySelector(".link-active-project :first-child")


let current = 0;
let prev = projects.length;
let next = current + 1;

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => i === 0 ? gotoPrev() : gotoNext());
}

projectNumber.textContent = `${current + 1}/${projects.length}`
checkItOut.href = projectDetails[current].link


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
    description.textContent = projectDetails[current].description
    projectNumber.textContent = `${current + 1}/${projects.length}`
    checkItOut.href = projectDetails[current].link
}


const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(projects.length - 1);

const gotoNext = () => current < projects.length - 1 ? gotoNum(current + 1) : gotoNum(0);

for (let i = 0; i < projects.length; i++) {
    projects[i].addEventListener("mouseover", () => {
        for (let i = 0; i < projects.length; i++) {
            projects[i].classList.remove("active");
            projects[i].classList.remove("prev");
            projects[i].classList.remove("next");
        }
        projects[i].classList.add("active")
        description.textContent = projectDetails[i].description
        checkItOut.href = projectDetails[i].link
    })
}