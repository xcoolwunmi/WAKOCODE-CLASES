const inputEl=document.querySelector("input")
const checkBtn=document.querySelector("button")
const container=document.querySelector(".container")

const outputPara=document.createElement('p')
container.append(outputPara)

const squadList={
        "Raya" : "spanish goalkeeper", 
        "Calafiore" : "italian player" ,
        "Timber" : "dutch player" ,
        "saliba": "french player" ,
        "Gabriel": "brazilian player" ,
        "Rice" : "English mildfielder" ,
        "Zubimendi" : "Spanish player" ,
        "Odegaard": "norwegian player", 
        "Eze": "british nigeria player" ,
        "Saka": "british nigerian player" ,
        "Gyokeres": "swedish player" ,
        "Kepa": "spanish goalkeeper" ,
        "White": "English Defender" ,
        "Skelly": "english player" ,
        "Norgaard": " norwegien player", 
        "Martinnelli": "brazillian player",
        "Trossard": "belgian player", 
        "Nwaneri": "british nigerian player " ,
        "Madueke": "british nigerian" 
};


checkBtn.addEventListener("click", ()=>{
    const playerName=inputEl.value
    if (squadList[playerName]) (outputPara.textContent = squadList[playerName]
    )
    else if( playerName ===""){outputPara.textContent = `Please select a player`


    }

    else{
        outputPara.textContent= ` ${playerName} is not an Arsenal player`
    }
})