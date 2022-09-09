async function dameMiPokemon(poke){
    try {
        const promesa = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
        const pokemon = await promesa.json();
        const sprite = pokemon.sprites.back_default;
        const imagen = document.createElement('img');
        imagen.src = sprite;
        imagen.width = 300;
        imagen.alt = "pokemon";
        document.getElementById("miPoke").append(imagen);
        document.getElementById("nombreEquipo").append(pokemon.name)
        return imagen;
    }
    catch(err) { console.log("Che, hubo un error: ", err)}
}

async function dameMiPokeDato(poke){
    try {
        const promesa = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
        const pokemon = await promesa.json();
        const sprite = pokemon.sprites.front_default
        const imagen = document.createElement('img');
        imagen.src = sprite;
        imagen.width = 225;
        imagen.alt = "pokemon";
        document.getElementById("otroPoke").append(imagen);
        document.getElementById("nombreEquipoRival").append(pokemon.name)
    }
    catch(err) { console.log("Che, hubo un error: ", err)}
}
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  

let moves1 = dameMiPokemon(randomIntFromInterval(1, 905));
let moves2 = dameMiPokeDato(randomIntFromInterval(1, 905));
console.log(moves1)
function huir(){
    setTimeout( () =>{
        document.getElementById("consola").innerHTML = "No puedes huir en esta version";
    }, 1000);
    document.getElementById("consola").innerHTML = "";
    document.getElementById("consola").append(". . .")
}
function pelea(moves1){
    setTimeout( () =>{
        document.getElementById("consola").innerHTML = `<div class="menu"><button>${"moves1[0].moves.name"}</button><button>${"moves1[1].moves.name"}</button><button>${"moves1[2].moves.name"}</button><button>${"moves1[3].moves.name"}</button></div>`;
    }, 1000);
    document.getElementById("consola").innerHTML = "";
    document.getElementById("consola").append(". . .")
}