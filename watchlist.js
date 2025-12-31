const container = document.getElementById("watchlistContainer");

const watchlist = JSON.parse(localStorage.getItem("watchlist"));

if (!watchlist || watchlist.length === 0) {
    container.innerHTML = "<p>No dramas added yet 🌸</p>";
} else {
    container.innerHTML = "";

    watchlist.forEach(drama => {
        if (!drama.title || !drama.image) return;

        container.innerHTML += `
            <div class="mini-card">
                <img src="${drama.image}" alt="${drama.title}" loading="lazy">
                <p>${drama.title}</p>
            </div>
        `;
    });
}
