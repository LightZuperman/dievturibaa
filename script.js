// Datuma Displejs
const tagad = new Date()
const datumizvadvieta = document.getElementById("datums")
let nedelasdiena = tagad.getDay()
function nedeldiena(nedelasdiena){
    if (nedelasdiena == 1){
        return "Pirmdiena"
    }
    else if (nedelasdiena == 2){
        return "Otrdiena"
    }
    else if (nedelasdiena == 3){
        return "Trešdiena"
    }
    else if (nedelasdiena == 4){
        return "Ceturtdiena"
    }
    else if (nedelasdiena == 5){
        return "Piektdiena"
    }
    else if (nedelasdiena == 0){
        return "Sestdiena"
    }
    else if (nedelasdiena == 6){
        return "Svētdiena"
    }
}
const kopejaisdatums = `${nedeldiena(nedelasdiena)} ${tagad.getDate()}.${tagad.getMonth()+1}.${tagad.getFullYear()}`
datumizvadvieta.innerHTML = kopejaisdatums



// Speles Loga Atvēršana/Aizvēršana
let logs = document.getElementById("gamedisplay")
function gameclose(){
    logs.style.display = "none"

}

function spelulogs() {
    logs.style.display = "block"
}

// Spēles kods

let zimes = [
    {
        zime: "auseklis",
        fails: "auseklis"
    },
    {
        zime: "dieva krusts",
        fails: "dievakrusts"
    },
    {
        zime: "jana zime",
        fails: "janazime"
    },
    {
        zime: "jumis",
        fails: "jumis"
    },
    {
        zime: "krustu krusts",
        fails: "krustukrusts"
    },
    {
        zime: "laimaszime",
        fails: "laimaszime"
    },
    {
        zime: "maras udeni",
        fails: "marasudeni"
    },
    {
        zime: "maras zime",
        fails: "maraszime"
    },
    {
        zime: "meness krusts",
        fails: "menesskrusts"
    },
    {
        zime: "saules zime",
        fails: "sauleszime"
    },
        {
        zime: "zalktis",
        fails: "zalktis"
    },
        {
        zime: "zvaigznes zime",
        fails: "zvaigzneszime"
    }
]

let currentzime = 0

function laiks(){
    validity.innerHTML = ''
}

function rndimg() {
    const img = document.querySelector(".guessimage")
    let img_index = Math.floor(Math.random()*zimes.length)
    let img_id = zimes[img_index].fails
    img.id = img_id
    currentzime = img_index
}

function matchgame() {
    const userinput = document.querySelector(".gameinput").value
    let img_name = zimes[currentzime].zime
    let validity = document.querySelector("#answerbox")
    if (userinput == img_name) {
        validity.innerHTML = "Pareizi!"
    }
    else {
        validity.innerHTML = "Nepareizi."    
    }
    setTimeout(laiks, 2000)
    rndimg()
}
rndimg()