const inputEl = document.querySelector("input");
    const checkBtn = document.querySelector("button");
    const container = document.querySelector(".container");

    const squadList = {
      Raya: {
        nationality: "Spanish",
        position: "Goalkeeper",
        age: 28,
        photo: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/RAYA_Headshot_web_njztl3wr.png?h=ad73a5fe&auto=webp&itok=V2bdCOQy"
      },
      Calafiore: {
        nationality: "Italian",
        position: "Defender",
        age: 22,
        photo: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/CALAFIORI_Headshot_web_f60m71do.png?h=ad73a5fe&auto=webp&itok=3I7v9jOk"
      },
      Timber: {
        nationality: "Dutch",
        position: "Defender",
        age: 23,
        photo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Jurrien_Timber_2022.jpg"
      },
      Saliba: {
        nationality: "French",
        position: "Defender",
        age: 24,
        photo: "https://resources.premierleague.com/premierleague/photos/players/250x250/p447201.png"
      },
      Gabriel: {
        nationality: "Brazilian",
        position: "Defender",
        age: 26,
        photo: "https://resources.premierleague.com/premierleague/photos/players/250x250/p250162.png"
      },
      Rice: {
        nationality: "English",
        position: "Midfielder",
        age: 26,
        photo: "https://resources.premierleague.com/premierleague/photos/players/250x250/p209244.png"
      },
      Zubimendi: {
        nationality: "Spanish",
        position: "Midfielder",
        age: 25,
        photo: "https://upload.wikimedia.org/wikipedia/commons/1/14/Mart%C3%ADn_Zubimendi.jpg"
      },
      Odegaard: {
        nationality: "Norwegian",
        position: "Midfielder",
        age: 25,
        photo: "https://resources.premierleague.com/premierleague/photos/players/250x250/p181253.png"
      },
      Eze: {
        nationality: "British-Nigerian",
        position: "Midfielder",
        age: 26,
        photo: "https://www.cpfc.co.uk/api/image/cpfc/players/2023-24/ezeg-1180.png"
      },
      Saka: {
        nationality: "British-Nigerian",
        position: "Winger",
        age: 23,
        photo: "https://resources.premierleague.com/premierleague/photos/players/250x250/p223340.png"
      },
      Gyokeres: {
        nationality: "Swedish",
        position: "Striker",
        age: 26,
        photo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Viktor_Gy%C3%B6keres_in_2023.jpg"
      },
      Kepa: {
        nationality: "Spanish",
        position: "Goalkeeper",
        age: 29,
        photo: "https://upload.wikimedia.org/wikipedia/commons/5/54/Kepa_2019.jpg"
      },
      White: {
        nationality: "English",
        position: "Defender",
        age: 27,
        photo: "https://resources.premierleague.com/premierleague/photos/players/250x250/p184670.png"
      },
      Skelly: {
        nationality: "English",
        position: "Midfielder",
        age: 18,
        photo: "https://www.evertonfc.com/api/image/cropandscale/1200x630/1287092"
      },
      Norgaard: {
        nationality: "Norwegian",
        position: "Midfielder",
        age: 29,
        photo: "https://www.brentfordfc.com/api/image/cropandscale/512x512/1291847"
      },
      Martinelli: {
        nationality: "Brazilian",
        position: "Winger",
        age: 23,
        photo: "https://resources.premierleague.com/premierleague/photos/players/250x250/p450181.png"
      },
      Trossard: {
        nationality: "Belgian",
        position: "Winger",
        age: 30,
        photo: "https://resources.premierleague.com/premierleague/photos/players/250x250/p177231.png"
      },
      Nwaneri: {
        nationality: "British-Nigerian",
        position: "Midfielder",
        age: 17,
        photo: "https://pbs.twimg.com/media/F-8v9mFXEAAbFxT.jpg"
      },
      Madueke: {
        nationality: "British-Nigerian",
        position: "Winger",
        age: 23,
        photo: "https://upload.wikimedia.org/wikipedia/commons/3/39/Noni_Madueke_2021.jpg"
      }
    };

    checkBtn.addEventListener("click", () => {
      const nameInput = inputEl.value.trim().toLowerCase();
      container.innerHTML = "";

      if (!nameInput) {
        container.textContent = "Please enter a player name.";
        return;
      }

      const matchedKey = Object.keys(squadList).find(
        key => key.toLowerCase() === nameInput
      );

      if (matchedKey) {
        const player = squadList[matchedKey];
        container.innerHTML = `
          <div class="player-card">
            <strong>${matchedKey}</strong><br>
            ${player.position}, ${player.nationality}, Age: ${player.age}<br>
            <img src="${player.photo}" alt="${matchedKey}" />
          </div>
        `;
      } else {
        container.textContent = `${inputEl.value} is not an Arsenal player.`;
      }
    });