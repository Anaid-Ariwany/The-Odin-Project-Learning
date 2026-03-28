const projects = [
    {
        name: "JobTracker",
        description: "A job application tracker tool. Helps users manage and track their job applications in one place.",
        image: "assets/projects/jobTracker.webp",
        live: "https://anaid-ariwany.github.io/Job-Tracker/",
        github: "https://github.com/Anaid-Ariwany/Job-Tracker",
        source: "The Odin Project"
    },
    {
        name: "TechStore",
        description: "A tech product showcase page. Sample design of an e-commerce website.",
        image: "assets/projects/techStore.webp",
        live: "https://anaid-ariwany.github.io/TechStore/",
        github: "https://github.com/Anaid-Ariwany/TechStore",
        source: "The Odin Project"
    },
    {
        name: "Savoria",
        description: "A modern restaurant landing page. Designed to showcase the restaurant's menu, ambiance, and unique offerings.",
        image: "assets/projects/savoria.webp",
        live: "https://anaid-ariwany.github.io/Savoria/",
        github: "https://github.com/Anaid-Ariwany/Savoria",
        source: "The Odin Project"
    },
    {
        name: "DevLaunch",
        description: "A marketing + listing website for an annual developer conference.",
        image: "assets/projects/devLaunch.webp",
        live: "https://anaid-ariwany.github.io/DevLaunch/",
        github: "https://github.com/Anaid-Ariwany/DevLaunch",
        source: "The Odin Project"
    },
    {
        name: "FlowTrack",
        description: "A SaaS landing page. A polished, professional marketing website for a fictional task management tool called FlowTrack.",
        image: "assets/projects/flowTrack.webp",
        live: "https://anaid-ariwany.github.io/Flow-Track/",
        github: "https://github.com/Anaid-Ariwany/Flow-Track",
        source: "The Odin Project"
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

