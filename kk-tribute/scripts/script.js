const navbar = document.querySelector("#navbar");
const searchBar = document.querySelector("#searchbar");
const container = document.querySelector("#card-container");

window.onscroll = function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.classList.add("scroll");
    } else {
        navbar.classList.remove("scroll");
    }
}

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
    let elem = document.createElement("div");
    elem.innerHTML = `
        <img src="${song.image}" alt="${song.title}"/>
        <h3>${song.title}</h1>
        <h6>Krishnakumar Kunnath</h2>
        <a href=${song.link} target="_blank">Visit <span class="arr">-></span></a>
    `;
    container.appendChild(elem);
});

const songDivs = document.querySelectorAll("#card-container div");

searchBar.addEventListener("input", e => {
    let val = e.target.value.toLowerCase();
    songArr.forEach((song, index) => {
        if(!song.title.toLowerCase().includes(val)) {
            songDivs[index].style.display = "none";
        } else {
            songDivs[index].style.display = "block";
        }
    })
})