
// Select elements
const button = document.querySelector("button");
const picsDiv = document.querySelector(".pics");

// Function to fetch and display breeds
async function getCatBreeds() {
  try {
    // Fetch data from API
    const res = await axios.get("https://catfact.ninja/breeds");
    const breeds = res.data.data;

    // Clear old content
    picsDiv.innerHTML = "";

    // Loop through breeds and display as cards
    breeds.forEach(breed => {
      const card = document.createElement("div");
      card.classList.add("breed-card");

      card.innerHTML = `
        <h2>${breed.breed}</h2>
        <p><strong>Origin:</strong> ${breed.origin}</p>
        <p><strong>Country:</strong> ${breed.country}</p>
        <p><strong>Coat:</strong> ${breed.coat}</p>
        <p><strong>Pattern:</strong> ${breed.pattern}</p>
      `;

      picsDiv.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    picsDiv.innerHTML = "<p>😿 Oops! Couldn’t fetch cat breeds.</p>";
  }
}

// Event listener for button
button.addEventListener("click", getCatBreeds);
