const showsContainer = document.querySelector(".container");
const nextPage = document.querySelector("#nxtpage");
const previous = document.querySelector("#Previous");
const pageNumber = document.querySelector("#pageNumber");

let numPage = 1;

// Fetch and render shows
async function basicShowInfo(num) {
    showsContainer.innerHTML = "";
    const res = await axios.get(
        `https://www.episodate.com/api/most-popular?page=${num}`
    );
    const shows = res.data.tv_shows;

    for (let show of shows) {
        const showCard = document.createElement("div");
        const showImg = document.createElement("img");
        const h3 = document.createElement("h3");

        h3.textContent = show.name;
        showImg.src = show.image_thumbnail_path;

        showCard.append(showImg);
        showCard.append(h3);
        showsContainer.append(showCard);
    }

    // ✅ Update page number
    pageNumber.textContent = `Page ${num}`;

    // ✅ Hide "Previous" button on page 1
    if (num === 1) {
        previous.style.display = "none";
    } else {
        previous.style.display = "inline-block";
    }
}

// Load first page initially
basicShowInfo(numPage);

// Next button
nextPage.addEventListener("click", () => {
    numPage += 1;
    basicShowInfo(numPage);
});

// Previous button (stop at page 1)
previous.addEventListener("click", () => {
    if (numPage > 1) {
        numPage -= 1;
        basicShowInfo(numPage);
    }
});
