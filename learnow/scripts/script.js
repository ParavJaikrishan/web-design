const programmingContainer = document.querySelector("#programming-container");
const businessContainer = document.querySelector("#business-container");
const searchBar = document.querySelector("#search-bar");

const activityArr = [
    {
        type: "programming",
        image: "images/html-css.png",
        title: "HTML & CSS",
        creator: "John Doe"
    },
    {
        type: "programming",
        image: "images/javascript.png",
        title: "Javascript Crash Course",
        creator: "Jane Doe"
    },
    {
        type: "programming",
        image: "images/nodejs.png",
        title: "Beginners guide to NodeJS",
        creator: "John Roe"
    },
    {
        type: "business",
        image: "images/business-intelligence.png",
        title: "Business Intelligence",
        creator: "Bill Gates"
    },
    {
        type: "business",
        image: "images/microsoft-bi.png",
        title: "Microsoft Power BI",
        creator: "Bill Gates"
    },
    {
        type: "business",
        image: "images/agile.png",
        title: "Agile Crash Course",
        creator: "Founder of Agile"
    }
];

const programmingArr = activityArr.filter(i => i.type == "programming");
const businessArr = activityArr.filter(i => i.type == "business");

programmingArr.forEach(program => {
    let div = document.createElement("div");
    div.innerHTML = `
        <img src="${program.image}" alt="${program.title}"/>
        <h1>${program.title}</h1>
        <p>By ${program.creator}</p>
    `;
    programmingContainer.appendChild(div);
});
businessArr.forEach(business => {
    let div = document.createElement("div");
    div.innerHTML = `
        <img src="${business.image}" alt="${business.title}"/>
        <h1>${business.title}</h1>
        <p>By ${business.creator}</p>
    `;
    businessContainer.appendChild(div);
});

const programDivs = document.querySelectorAll("#programming-container div");
const businessDivs = document.querySelectorAll("#business-container div");

searchBar.addEventListener("input", e => {
    let val = e.target.value.toLowerCase();
    programmingArr.forEach((program, index) => {
        if(!program.title.toLowerCase().includes(val) && !program.creator.toLowerCase().includes(val)) {
            programDivs[index].style.display = "none";
        } else {
            programDivs[index].style.display = "block";
        }
    });
    businessArr.forEach((business, index) => {
        if(!business.title.toLowerCase().includes(val) && !business.creator.toLowerCase().includes(val)) {
            businessDivs[index].style.display = "none";
        } else {
            businessDivs[index].style.display = "block";
        }
    });
});
console.log("Hello");