const showsContainer = document.querySelector(".container")
const bodyEl = document.body

async function basicShowInfo(){
    const res = await axios.get(`https://www.episodate.com/api/most-popular?page=1`)
    const shows = res.data.tv_shows

    for(let show of shows){
        const showCard = document.createElement("div")
        const showImg = document.createElement("img")
        const h2 = document.createElement("h2")
        h2.textContent = show.name
        showCard.append(h2)
        showsContainer.append (showCard)
    }
}

basicShowInfo();