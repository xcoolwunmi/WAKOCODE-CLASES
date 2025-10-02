

const showsContainer = document.querySelector(".container");
const nextPage = document.querySelector("#nxtpage");
const previous = document.querySelector("#Previous");
const pageNumber = document.querySelector("#pageNumber");
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const clearSearchBtn = document.querySelector("#clearSearch");

// Popup elements
const popup = document.querySelector("#popup");
const popupTitle = document.querySelector("#popupTitle");
const popupImg = document.querySelector("#popupImg");
const popupDesc = document.querySelector("#popupDesc");
const closePopup = document.querySelector("#closePopup");

let numPage = 1;
let inSearchMode = false;

// ✅ Fetch and render shows (Popular list)
async function basicShowInfo(num) {
    showsContainer.innerHTML = "";
    const res = await axios.get(
        `https://www.episodate.com/api/most-popular?page=${num}`
    );
    const shows = res.data.tv_shows;

    renderShows(shows);

    // ✅ Update page number
    pageNumber.textContent = `Page ${num}`;
    restorePagination();
}

// ✅ Render shows (for both search and popular)
function renderShows(shows) {
    showsContainer.innerHTML = "";
    for (let show of shows) {
        const showCard = document.createElement("div");
        showCard.classList.add("show-card");

        const showImg = document.createElement("img");
        const h3 = document.createElement("h3");

        h3.textContent = show.name;
        showImg.src = show.image_thumbnail_path;

        showCard.append(showImg);
        showCard.append(h3);
        showsContainer.append(showCard);

        // ✅ Click event for popup
        showCard.addEventListener("click", () => {
            showPopup(show);
        });
    }
}

// ✅ Show popup with real description
async function showPopup(show) {
    try {
        const res = await axios.get(
            `https://www.episodate.com/api/show-details?q=${show.permalink}`
        );
        const details = res.data.tvShow;

        popupTitle.textContent = details.name;
        popupImg.src = details.image_thumbnail_path;
        popupDesc.textContent =
            details.description || "No description available.";
    } catch (err) {
        popupTitle.textContent = show.name;
        popupImg.src = show.image_thumbnail_path;
        popupDesc.textContent = "No description available.";
    }

    popup.style.display = "block";
}

// ✅ Close popup
closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});

// ✅ Search functionality
async function searchShows(query) {
    const res = await axios.get(
        `https://www.episodate.com/api/search?q=${query}`
    );
    const shows = res.data.tv_shows;
    renderShows(shows);
    pageNumber.textContent = `Search results for "${query}"`;

    // Hide pagination while searching
    previous.style.display = "none";
    nextPage.style.display = "none";
    inSearchMode = true;
}

// Search button
searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
        searchShows(query);
    }
});

// ✅ Clear search button → return to popular browsing
clearSearchBtn.addEventListener("click", () => {
    inSearchMode = false;
    numPage = 1;
    basicShowInfo(numPage);
    searchInput.value = "";
});

// ✅ Restore pagination
function restorePagination() {
    if (!inSearchMode) {
        previous.style.display = numPage === 1 ? "none" : "inline-block";
        nextPage.style.display = "inline-block";
    }
}

// Load first page initially
basicShowInfo(numPage);

// ✅ Pagination events
nextPage.addEventListener("click", () => {
    if (!inSearchMode) {
        numPage += 1;
        basicShowInfo(numPage);
    }
});

previous.addEventListener("click", () => {
    if (!inSearchMode && numPage > 1) {
        numPage -= 1;
        basicShowInfo(numPage);
    }
});
