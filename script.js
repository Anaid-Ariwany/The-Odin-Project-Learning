const projects = [
    {
        name: "Recipe Page",
        description: "A basic HTML recipe page with a list of recipes and their instructions.",
        image: "assets/recipe.webp",
        live: "https://anaid-ariwany.github.io/The-Odin-Project-Learning/HTML/Projects/Recipes/",
        github: "https://github.com/Anaid-Ariwany/The-Odin-Project-Learning/tree/main/HTML/Projects/Recipes",
        source: "https://www.theodinproject.com/lessons/foundations-recipes"
    },
    {
        name: "Landing Page",
        description: "A simple static landing page styled with CSS. No responsive design.",
        image: "assets/landingPage.webp",
        live: "https://anaid-ariwany.github.io/The-Odin-Project-Learning/CSS/Projects/Landing%20Page/",
        github: "https://github.com/Anaid-Ariwany/The-Odin-Project-Learning/tree/main/CSS/Projects/Landing%20Page",
        source: "https://www.theodinproject.com/lessons/foundations-landing-page"
    },
    {
        name: "Rock Paper Scissors",
        description: "A simple game of rock, paper, scissors implemented with HTML, CSS, and JavaScript. No responsive design.",
        image: "assets/rockPaperScissors.webp",
        live: "https://anaid-ariwany.github.io/The-Odin-Project-Learning/JavaScript/Projects/rockPaperScissorsUI/",
        github: "https://github.com/Anaid-Ariwany/The-Odin-Project-Learning/tree/main/JavaScript/Projects/rockPaperScissorsUI",
        source: "https://www.theodinproject.com/lessons/foundations-rock-paper-scissors"
    },
    {
        name: "Etch-a-Sketch",
        description: "A simple drawing app implemented with HTML, CSS, and JavaScript. No responsive design.",
        image: "assets/etch-a-sketch.webp",
        live: "https://anaid-ariwany.github.io/Etch-a-Sketch/",
        github: "https://github.com/Anaid-Ariwany/Etch-a-Sketch",
        source: "https://www.theodinproject.com/lessons/foundations-etch-a-sketch"
    },
    {
        name: "Final Project: Calculator",
        description: "A simple calculator implemented with HTML, CSS, and JavaScript. Responsive design.",
        image: "assets/calculatorPreview.webp",
        live: "https://anaid-ariwany.github.io/Calculator/",
        github: "https://github.com/Anaid-Ariwany/Calculator/",
        source: "https://www.theodinproject.com/lessons/foundations-calculator"
    }
];


const projectContainer = document.querySelector(".projectContainer");

projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("card");
    projectCard.innerHTML = `
        <div class="row g-1">
            <div class="col-xxl-12 imagediv">
                <img src="${project.image}" class="card-img-top" alt="${project.name}">
            </div>
            <div class="col-xxl-12">
                <div class="card-body">
                    <h4 class="card-title poppins-semibold">${project.name}</h4>
                    <p class="card-text">${project.description}</p>
                    <div class="projectButtons">
                        <button onclick="window.open('${project.live}', '_blank', 'noopener,noreferrer')"
                            class="lightButton">Live Demo</button>
                        <button onclick="window.open('${project.github}', '_blank', 'noopener,noreferrer')"
                            class="darkButton">GitHub Repo</button>
                        <button onclick="window.open('${project.source}', '_blank', 'noopener,noreferrer')"
                            class="lightButton">Source</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    projectContainer.appendChild(projectCard);
});

