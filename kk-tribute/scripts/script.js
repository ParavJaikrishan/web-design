const navbar = document.querySelector("#navbar");
const searchBar = document.querySelector("#searchbar");
const container = document.querySelector("#card-container");

const songArr = [
    {
        image: "images/song1.jpg",
        title: "Aankhon Mein Teri",
        link: "https://www.youtube.com/watch?v=vsLJtZVp-5Y"
    },
    {
        image: "images/song2.jpg",
        title: "O Jaana",
        link: "https://www.youtube.com/watch?v=gBxOfn9XT48"
    },
    {
        image: "images/song3.jpg",
        title: "Tadap Tadap",
        link: "https://www.youtube.com/watch?v=JlRTaBJchSA"
    },
    {
        image: "images/song4.jpg",
        title: "Labon Ko",
        link: "https://www.youtube.com/watch?v=-FP2Cmc7zj4"
    },
    {
        image: "images/song5.jpg",
        title: "Uppenantha",
        link: "https://www.youtube.com/watch?v=TIOZUdc0aL8"
    },
    {
        image: "images/song6.jpg",
        title: "Humko Pyaar Hua",
        link: "https://www.youtube.com/watch?v=EB25MOJIHRQ"
    }
];

songArr.forEach(song => {
    let div = document.createElement(div);
    div.innerHTML = `
        <img src=${song.image} alt=${song.title}/>
        <h1>${song.title}</h1>
        <h2>Krishnakumar Kunnath</h2>
        <a href=${song.link} target="_blank">Visit -></a>
    `;
})
window.onscroll = function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.classList.add("scroll");
    } else {
        navbar.classList.remove("scroll");
    }
}