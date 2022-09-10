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
        document.getElementById("suPokeId").innerHTML = poke;
    }
    catch(err) { console.log("Che, hubo un error: ", err)}
}

async function dameMiPokeDato(poke){
    try {
        const promesa = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
        const pokemon = await promesa.json();
        const sprite = pokemon.sprites.front_default
        const imagen = document.createElement('img');
        imagen.src = sprite;
        imagen.width = 225;
        imagen.alt = "pokemon";
        document.getElementById("otroPoke").append(imagen);
        document.getElementById("nombreEquipoRival").append(pokemon.name)
        document.getElementById("miPokeId").innerHTML = poke;
    }
    catch(err) { console.log("Che, hubo un error: ", err)}
}
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
dameMiPokemon(randomIntFromInterval(1, 905));
dameMiPokeDato(randomIntFromInterval(1, 905));

function huir(){
    setTimeout( () =>{
        document.getElementById("consola").innerHTML = "No puedes huir en esta version";
    }, 1000);
    document.getElementById("consola").innerHTML = "";
    document.getElementById("consola").append(". . .")
}
function pelea(){
    const miPokeId = document.getElementById("miPokeId").innerHTML;
    fetch(`https://pokeapi.co/api/v2/pokemon/${miPokeId}`)
    .then(res => res.json())
    .then(data => {    
        console.log(data)
        let habilidad1 = randomIntFromInterval(1,data.moves.length);
        let habilidad2 = randomIntFromInterval(1,data.moves.length);
        let habilidad3 = randomIntFromInterval(1,data.moves.length);
        let habilidad4 = randomIntFromInterval(1,data.moves.length);

        setTimeout( () =>{
            document.getElementById("hud").classList.toggle('hudPelea');
            document.getElementById("consola").innerHTML = `<div class="menu"><button onClick=ataque()>${data.moves[habilidad1].move.name}</button><button>${data.moves[habilidad2].move.name}</button><button>${data.moves[habilidad3].move.name}</button><button>${data.moves[habilidad4].move.name}</button></div>`;
        }, 500);
        document.getElementById("consola").innerHTML = "";
        document.getElementById("consola").append(". . .")
    })
}
function abrirEquipo(){
    setTimeout( () =>{
        document.getElementById("consola").innerHTML = "No puedes cambiar a tu equipo en esta version";
    }, 1000);
    document.getElementById("consola").innerHTML = "";
    document.getElementById("consola").append(". . .")
}
function bolsa(){
    setTimeout( () =>{
        document.getElementById("consola").innerHTML = "No puedes abrir tu mochila en esta version";
    }, 1000);
    document.getElementById("consola").innerHTML = "";
    document.getElementById("consola").append(". . .")
}
function ataque(){
    if(document.getElementById("miPoke").classList.contains('movimientoPegar')){
        document.getElementById("miPoke").classList.remove('movimientoPegar')
        document.getElementById("miPoke").classList.add('movimientoPegarB')
        return;
    }
    else{
        document.getElementById("miPoke").classList.remove('movimientoPegarB') 
        document.getElementById("miPoke").classList.add('movimientoPegar');
    }
}

document.querySelector('#container').addEventListener('mouseleave', a )
document.querySelector('#container').addEventListener('mouseenter', b )
function a(){
    if(this.classList.toggle('sec')){
        this.classList.toggle('sec');
    }
    this.classList.toggle('first');
}
function b(){
    if(this.classList.toggle('sec')){
        this.classList.remove('first')
    }
}
