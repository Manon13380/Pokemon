let srcPicture = "";
let poke;
let sentence = document.querySelector("#result");
let point = 0;
let score = document.querySelector("#score");

async function getpoke() {
    let number = randomize(1, 151);
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`);
    let data = await res.json();
    return data
}

async function displayPicture() {
    poke = await getpoke();
    console.log(poke.name);
    let picture = document.querySelector("#imgPokemon");
    picture.src = poke.sprites.other["official-artwork"].front_default;;
    score.innerHTML = point;
}

function randomize(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let response = document.querySelector("#response").value
        if (response.length > 0) {
            if (response.toLowerCase() == poke.name) {
                sentence.innerHTML = "Bonne réponse !";
                sentence.style.color = "green";
                point++;
                score.innerHTML = point;
            }
            else if (response.toLowerCase() != poke.name) {
                sentence.innerHTML = `Mauvaise réponse! La bonne réponse est ${poke.name}`;
                sentence.style.color = "red";
            }
            document.querySelector("#response").value = "";
            displayPicture();
        }
    }
});


displayPicture()
