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
        console.log(pokemon)
        const sprite = pokemon.sprites.front_default
        const imagen = document.createElement('img');
        imagen.src = sprite;
        imagen.width = 225;
        imagen.alt = "pokemon";
        document.getElementById("otroPoke").append(imagen);
        document.getElementById("nombreEquipoRival").append(pokemon.name)
        return imagen;
    }
    catch(err) { console.log("Che, hubo un error: ", err)}
}
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
const rndInt = randomIntFromInterval(1, 905)

dameMiPokemon(randomIntFromInterval(1, 905));
dameMiPokeDato(rndInt);
function holis(){
    setTimeout( () =>{
        document.getElementById("consola").innerHTML = "No puedes huir en esta version";
    }, 1000);
    document.getElementById("consola").innerHTML = "";
    document.getElementById("consola").append(". . .")
}