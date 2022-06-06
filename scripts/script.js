const programmingContainer = document.querySelector("#programming-container");
const businessContainer = document.querySelector("#business-container");

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

programmingArr.forEach((program, index) => {
    let div = document.createElement("div");
    div.innerHTML = ```
        <img src="${program.image}" alt="${program.title}"/>
        <h1>${program.title}</h1>
        <p>By ${program.creator}</p>
    ```;
    programmingContainer.appendChild(div);
});
businessArr.forEach((business, index) => {
    let div = document.createElement("div");
    div.innerHTML = ```
        <img src="${business.image}" alt="${business.title}"/>
        <h1>${business.title}</h1>
        <p>By ${business.creator}</p>
    ```;
    businessContainer.appendChild(div);
});