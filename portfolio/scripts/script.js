const projectContainer = document.querySelector("#project-container");
const searchbar = document.querySelector("#search-bar");

const projectArr = [
    {
        image: "images/drawing.png",
        title: "Drawing"
    },
    {
        image: "images/infrastructure.png",
        title: "Infrastructure"
    },
    {
        image: "images/chips.png",
        title: "Hardware"
    },
    {
        image: "images/furniture.png",
        title: "Furniture"
    },
    {
        image: "images/designing.png",
        title: "Designing"
    },
    {
        image: "images/food.png",
        title: "Food"
    }  
];

projectArr.forEach(project => {
    let div = document.createElement("div");
    div.innerHTML = `
    <img src="${project.image}" alt="${project.title}"/>
    <h1>${project.title}</h1>
    `;
    projectContainer.appendChild(div);
});

const projectDivs = document.querySelectorAll("#project-container div");

searchbar.addEventListener("input", e => {
    let val = e.target.value.toLowerCase();
    projectArr.forEach((project, index) => {
        if(!project.title.toLowerCase().includes(val))
            projectDivs[index].style.display = "none";
        else
            projectDivs[index].style.display = "block";
    })
})