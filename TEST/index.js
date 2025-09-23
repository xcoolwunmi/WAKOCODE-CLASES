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
        photo: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/TIMBER_Headshot_web_by8hrsl6.png?h=ad73a5fe&auto=webp&itok=Av7QXtLK"
      },
      Saliba: {
        nationality: "French",
        position: "Defender",
        age: 24,
        photo: "https://www.arsenal.com/sites/default/files/styles/desktop_16x9/public/images/SALIBA_Headshot_web_khl9z1vw.png?h=ad73a5fe&auto=webp&itok=Kd_KpCDt"
      },
      Gabriel: {
        nationality: "Brazilian",
        position: "Defender",
        age: 26,
        photo: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/MAGALHAES_Headshot_web_uhkgt913.png?h=ad73a5fe&auto=webp&itok=AbpWH11U"
      },
      Rice: {
        nationality: "English",
        position: "Midfielder",
        age: 26,
        photo: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/RICE_Headshot_web_ml5vq29g.png?h=ad73a5fe&auto=webp&itok=1rh28pbj"
      },
      Zubimendi: {
        nationality: "Spanish",
        position: "Midfielder",
        age: 25,
        photo: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/ZUBIMENDI_Headshot_web_blzez6pe.png?h=ad73a5fe&auto=webp&itok=h-GWUnrK"
      },
      Odegaard: {
        nationality: "Norwegian",
        position: "Midfielder",
        age: 25,
        photo: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/ODEGAARD_Headshot_web_z0tram3m.png?h=ad73a5fe&auto=webp&itok=Of2W460g"
      },
      Eze: {
        nationality: "British-Nigerian",
        position: "Midfielder",
        age: 26,
        photo: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/eze-headshot-2_oewup9di.png?h=6dff888f&auto=webp&itok=wavM774t"
      },
      Saka: {
        nationality: "British-Nigerian",
        position: "Winger",
        age: 23,
        photo: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/SAKA_Headshot_web_mxqw4vma.png?h=ad73a5fe&auto=webp&itok=sF_7_QGZ"
      },
      Gyokeres: {
        nationality: "Swedish",
        position: "Striker",
        age: 26,
        photo: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/GYOKERES_Headshot_web_ktz9gnvk.png?h=ad73a5fe&auto=webp&itok=WHckbM2w"
      },
      Kepa: {
        nationality: "Spanish",
        position: "Goalkeeper",
        age: 29,
        photo: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/KEPA_Headshot_web_u0z71ucm.png?h=ad73a5fe&auto=webp&itok=HvVO-Q1q"
      },
      White: {
        nationality: "English",
        position: "Defender",
        age: 27,
        photo: "https://www.arsenal.com/sites/default/files/styles/player_card_large/public/images/B.WHITE_Headshot_web_xdbqzl78.png?auto=webp&itok=0gg2E5xJ"
      },
      Skelly: {
        nationality: "English",
        position: "Midfielder",
        age: 18,
        photo: "https://www.arsenal.com/sites/default/files/styles/player_card_large/public/images/LEWIS-SKELLY_Headshot_web_cewuwnp9.png?auto=webp&itok=DOWJw2Zk"
      },
      Norgaard: {
        nationality: "Norwegian",
        position: "Midfielder",
        age: 29,
        photo: "https://www.arsenal.com/sites/default/files/styles/player_card_large/public/images/NORGAARD_Headshot_web_szdkungt.png?auto=webp&itok=z2xbVQkp"
      },
      Martinelli: {
        nationality: "Brazilian",
        position: "Winger",
        age: 23,
        photo: "https://www.arsenal.com/sites/default/files/styles/player_card_extra_large/public/images/MARTINELLI_Headshot_web_l7r7lao5.png?auto=webp&itok=UgLVI3cc"
      },
      Trossard: {
        nationality: "Belgian",
        position: "Winger",
        age: 30,
        photo: "https://www.arsenal.com/sites/default/files/styles/player_card_large/public/images/TROSSARD_Headshot_web_c75bgy21.png?auto=webp&itok=dCCTIY0U"
      },
      Nwaneri: {
        nationality: "British-Nigerian",
        position: "Midfielder",
        age: 17,
        photo: "https://www.arsenal.com/sites/default/files/styles/player_card_large/public/images/TROSSARD_Headshot_web_c75bgy21.png?auto=webp&itok=dCCTIY0U"
      },
      Madueke: {
        nationality: "British-Nigerian",
        position: "Winger",
        age: 23,
        photo: "https://www.arsenal.com/sites/default/files/styles/player_card_large/public/images/MADUEKE_Headshot_web_tki7sn7x.png?auto=webp&itok=FFfmAyFu"
      }
    };

    console.log(Object.keys(squadList));
    

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

      console.log(matchedKey);
      

      if (matchedKey) {
        const player = squadList[matchedKey];
        console.log(player);
        
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