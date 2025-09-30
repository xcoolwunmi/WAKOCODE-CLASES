const showsContainer = document.querySelector(".container");
const bodyEl = document.body;
const nextPage = document.querySelector("#nxtpage")
const previous = document.querySelector("#Previous")

async function basicShowInfo(num) {
    showsContainer.innerHTML= ""
  const res = await axios.get(
    `https://www.episodate.com/api/most-popular?page=${num}`
  );
  const shows = res.data.tv_shows;

  for (let show of shows) {
    const showCard = document.createElement("div");
    const showImg = document.createElement("img");
    const h3 = document.createElement("h3");
    h3.textContent = show.name
    showImg.src = show.image_thumbnail_path;
    showCard.append(showImg)
    showCard.append(h3);
    showsContainer.append(showCard);
  }
}

basicShowInfo();

let numPage = 1;

basicShowInfo (numPage)

nextPage.addEventListener("click", ()=>{
    numPage += 1;
    basicShowInfo(numPage)
})


previous.addEventListener("click", ()=>{
    numPage -= 1;
    basicShowInfo(numPage)
})