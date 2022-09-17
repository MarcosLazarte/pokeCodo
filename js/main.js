async function dameMiPokemon(poke){
    try {
        const promesa = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
        const pokemon = await promesa.json();
        const sprite = pokemon.sprites.back_default;
        const imagen = document.createElement('img');
        imagen.src = sprite;
        imagen.width = 300;
        imagen.alt = "pokemon";
        document.getElementById("nombrePoke").append(pokemon.name)
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
        
        //Me aseguro que sí es la primera vez que se busca una habilidad, la guarde en div
        //Y, que en las continuas llamadas al botón Fight, muestre las mismas habilidades
        if(document.getElementById("idAtaque1").innerHTML == ""){

            //numero de la habilidad, buscado aleatoriamente
            let habilidad1 = randomIntFromInterval(1,data.moves.length);    
            let habilidad2 = randomIntFromInterval(1,data.moves.length);    
            let habilidad3 = randomIntFromInterval(1,data.moves.length);    
            let habilidad4 = randomIntFromInterval(1,data.moves.length);

            setTimeout( () =>{
                if(document.getElementById("hud").classList.toggle('hudPelea')){
                    document.getElementById("hud").classList.remove('hudPelea');
                    document.getElementById("hud").classList.add('hudPeleaB')
                }
                else{
                    document.getElementById("miPoke").classList.remove('hudPeleaB') 
                    document.getElementById("miPoke").classList.add('hudPelea');
                }
                document.getElementById("idAtaque1").innerHTML = habilidad1;
                document.getElementById("idAtaque2").innerHTML = habilidad2;
                document.getElementById("idAtaque3").innerHTML = habilidad3;
                document.getElementById("idAtaque4").innerHTML = habilidad4;

                document.getElementById("consola").innerHTML = `<div class="menu">
                    <button onClick=ataque()>${data.moves[habilidad1].move.name}</button>
                    <button>${data.moves[habilidad2].move.name}</button>
                    <button>${data.moves[habilidad3].move.name}</button>
                    <button>${data.moves[habilidad4].move.name}</button>
                    </div>`;
            }, 500);
            
            document.getElementById("consola").innerHTML = "";
            document.getElementById("consola").innerHTML = `<div style="font-size:55px">. . .</div>`;
        } else {
            let habilidad1 = document.getElementById("idAtaque1").innerHTML;
            let habilidad2 = document.getElementById("idAtaque2").innerHTML;
            let habilidad3 = document.getElementById("idAtaque3").innerHTML;
            let habilidad4 = document.getElementById("idAtaque4").innerHTML;

            setTimeout( () =>{
                if(document.getElementById("hud").classList.toggle('hudPelea')){
                    document.getElementById("hud").classList.remove('hudPelea');
                    document.getElementById("hud").classList.add('hudPeleaB')
                }
                else{
                    document.getElementById("miPoke").classList.remove('hudPeleaB') 
                    document.getElementById("miPoke").classList.add('hudPelea');
                }
                
                document.getElementById("consola").innerHTML = `<div class="menu">
                    <button onClick=ataque()>${data.moves[habilidad1].move.name}<div id="idAtaque1" style="display:none">${habilidad1}</div></button>
                    <button>${data.moves[habilidad2].move.name}<div id="idAtaque2" style="display:none">${habilidad2}</div></button>
                    <button>${data.moves[habilidad3].move.name}<div id="idAtaque3" style="display:none">${habilidad3}</div></button>
                    <button>${data.moves[habilidad4].move.name}<div id="idAtaque4" style="display:none">${habilidad4}</div></button>
                    </div>`;
            }, 500);
            document.getElementById("consola").innerHTML = "";
            document.getElementById("consola").innerHTML = `<div style="font-size:55px">. . .</div>`;
    }})
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
    }
    else{
        document.getElementById("miPoke").classList.remove('movimientoPegarB') 
        document.getElementById("miPoke").classList.add('movimientoPegar');
    }
    let ataque = 10;
    let vida = parseInt(document.getElementById("vidaActualRival").innerHTML);
    let vidaTotal = parseInt(document.getElementById("vidaTotalRival").innerHTML);
    
    document.getElementById("vidaActualRival").innerHTML = vida - ataque;

    addAnimation(`
      @keyframes animacionBajarVida { 
         from {
         }
        to {
          width: ${(vida - ataque)*100/vidaTotal}%;
        }
      }
    `);

    document.getElementById("vida_barraRojaRival").classList.add("danio");
}

function vida(danio, pokemon){
    let vidaRestante = document.getElementById("vidaActual").innerHTML;
    return alert(vidaRestante);
}



//Deje estas cosas para verificar cosas
document.querySelector('#container').addEventListener('mouseleave', a );
document.querySelector('#container').addEventListener('mouseenter', b );

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
function addAnimation(body) {
    let dynamicStyles = null

    if (!dynamicStyles) {
      dynamicStyles = document.createElement('style');
      dynamicStyles.type = 'text/css';
      document.head.appendChild(dynamicStyles);
    }
    dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
  }