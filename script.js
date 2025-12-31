const dramas = [
    {
        title: "Hidden Love",
        country: "China",
        genre: ["Romance","Family"],
        image: "hidden-love.jpg",
        isTrending: true
    },
    {
        title: "When I Fly Towards You",
        country: "China",
        genre: ["School Life","Youth","Friendship"],
        image: "WIFTY.jpg",
        isTrending: true
    },
    {
        title: "Reply 1988",
        country: "Korea",
        genre: ["Friendship","Family"],
        image: "reply1988.webp",
        isTrending: true
    },
    
    {
        title: "Go Ahead",
        country: "China",
        genre: "Family",
        image: "go ahead.avif",
        isTrending: false
    },
    {
        title: "Put Your Head on My Shoulder",
        country: "China",
        genre: ["School Life","Youth","Romance"],
        image: "PYHOMS.jpg",
        isTrending: false
    },
    {
        title: "Shine on Me",
        country: "China",
        genre: "Romance",
        image: "shine on me.jpg",
        isTrending: true

    },
    {
        title: "The trauma code heroes on call",
        country: "Korea",
        genre: "Romance",
        image: "the trauma.jpg",
        isTrending: true
    },
    {
        title: "When life gives you tangerines",
        country: "Korea",
        genre: "Family",
        genre: "Youth",
        image: "Tangerines.jpg",
        isTrending: true
    },
    {
        title: "Queen of tears",
        country: "Korea",
        genre: ["Romance"],
        image: "queen of tears.jpg",
        isTrending: true
    },
    {
        title: "Falling into your smile",
        country: "China",
        genre: ["Romance","Youth","Friendship"],
        image: "falling into.jpg",
        isTrending: false
    },
    {
        title: "Lovely Runner",
        country: "Korea",
        genre: ["School Life","Youth"],
        image: "lovely runner.jpg",
        isTrending: true
    },
    {
        title: "King the land",
        country: "Korea",
        genre: "Romance",
        image: "king the land.jpg",
        isTrending: false
    },
    {
        title: "twenty five twenty one",
        country: "Korea",
        genre: ["School Life","Youth"],
        image: "2521.jpg",
        isTrending: true
    },
    {
        title: "A business proposal",
        country: "Korea",
        genre: "Romance",
        image: "A_Business_proposal.jpg",
        isTrending: false
    },
    {
        title: "Always Home",
        country: "China",
        genre: ["School Life","Youth","Friendship"],
        image: "always home.jpg",
        isTrending: false
    },
    {
        title: "Forever and Ever",
        country: "China",
       genre: ["Romance","Family"],
        image: "forever and ever.jpg",
        isTrending: false
    },
    {
        title: "Go Go Squide",
        country: "China",
        genre: "Romance",
        image: "go go sq.jpg",
        isTrending: false
    },
    {
        title: "The First Frost",
        country: "China",
        genre: "Romance",
        image: "the first frost.jpg",
        isTrending: false
    },
    
];

const dramaContainer = document.getElementById("dramaContainer");

// Group dramas by country
const groupedByCountry = {};

dramas.forEach((drama, index) => {
    if (!groupedByCountry[drama.country]) {
        groupedByCountry[drama.country] = [];
    }
    groupedByCountry[drama.country].push({ ...drama, index });
});



const genreSpans = document.querySelectorAll(".genres span");

genreSpans.forEach(span => {
    span.addEventListener("click", () => {
        genreSpans.forEach(s => s.classList.remove("active"));
        span.classList.add("active");

        const genre = span.innerText;
        filterByGenre(genre);
    });
});

function filterByGenre(genre) {
    dramaContainer.innerHTML = "";

    const filtered = dramas.filter(d =>
    d.genre.includes(genre)
);


    renderByCountry(filtered);
}
function renderByCountry(list) {
    dramaContainer.innerHTML = "";

    const grouped = {};

    list.forEach(drama => {
        if (!grouped[drama.country]) {
            grouped[drama.country] = [];
        }
        grouped[drama.country].push(drama);
    });

    for (let country in grouped) {
        const section = document.createElement("div");
        section.className = "language-block";

        section.innerHTML = `
    <h2>${country} Dramas</h2>
    <div class="drama-row">
        ${grouped[country]
            .map((drama, index) => `
                <div class="mini-card">
                    <img src="${drama.image}" alt="${drama.title}" onclick="openDetails(${index})"  loading="lazy">
                    <p>${drama.title}</p>
                </div>
            `)
            .join("")}
    </div>
`;


        dramaContainer.appendChild(section);
    }
}


renderByCountry(dramas);
const searchBox = document.querySelector(".search-box");

searchBox.addEventListener("input", () => {
    genreSpans.forEach(s => s.classList.remove("active"));

    const text = searchBox.value.toLowerCase();

    const filtered = dramas.filter(d =>
    d.title.toLowerCase().includes(text) ||
    d.genre.some(g => g.toLowerCase().includes(text))
);


    dramaContainer.innerHTML = "";
    renderByCountry(filtered);
});
function openDetails(index) {
    console.log("Clicked drama index:", index);
    window.location.href = `details.html?id=${index}`;
}
    


function addToWatchlist(index) {
    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

    if (!watchlist.includes(dramas[index].title)) {
        watchlist.push(dramas[index].title);
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
        alert("Added to Watchlist ❤️");
    } else {
        alert("Already in Watchlist 😊");
    }
}

const trendingRow = document.getElementById("trendingRow");

function renderTrending() {
    trendingRow.innerHTML = "";

    dramas.forEach((drama, index) => {
        if (drama.isTrending) {
            const card = document.createElement("div");
            card.className = "trending-card";

            card.innerHTML = `
                <img src="${drama.image}" alt="${drama.title}" loading="lazy">
                <p>${drama.title}</p>
            `;

            card.addEventListener("click", () => {
                openDetails(index);
            });

            trendingRow.appendChild(card);
        }
    });
}

renderTrending();
// function addToWatchlist(dramaId) {
//     let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

//     const drama = dramas.find(d => d.id === dramaId);

//     // prevent duplicates
//     const exists = watchlist.some(d => d.id === dramaId);
//     if (exists) {
//         alert("Already in watchlist ❤️");
//         return;
//     }

//     watchlist.push(drama);
//     localStorage.setItem("watchlist", JSON.stringify(watchlist));

//     alert("Added to watchlist 🌸");
// }

function addToWatchlist(index) {
    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

    const drama = dramas[index];

    if (!drama || !drama.title || !drama.image) {
        console.error("Invalid drama data", drama);
        return;
    }

    const exists = watchlist.some(d => d.title === drama.title);
    if (exists) {
        alert("Already in Watchlist ❤️");
        return;
    }

    watchlist.push({
        title: drama.title,
        image: drama.image
    });

    localStorage.setItem("watchlist", JSON.stringify(watchlist));
    alert("Added to Watchlist 🌸");
}





