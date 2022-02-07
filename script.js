let numCartas = 0;
let qtdCarta = 0;
let vetorIndices = [0,1,2,3,4,5,6];

// pedir a qtd de cartas do jogo
function pedirQtdCartas() {
    while (numCartas < 4 || numCartas > 14 || numCartas % 2 != 0 ) {
        numCartas = parseInt(prompt("Com quantas cartas deseja jogar? (números pares entre 4 e 14)"));
        // vetor.push(numCartas);
    }
    qtdCarta = numCartas / 2;
}
pedirQtdCartas();


//embaralhar as cartas do jogo
vetorIndices.sort(comparador);

function comparador() {
    return Math.random() -0.5;
}

let cartas = [];
function cartasCertas() {
    for (let i = 0; i < qtdCarta; i++) {
        cartas.push(vetorIndices[i]);
        cartas.push(vetorIndices[i]);
    }
   
}
cartasCertas();
cartas.sort(comparador);


// criar cartas no html
function cartasHTML() {
    let carta = document.querySelector(".cartas");
    
    for (let i = 0; i < numCartas; i++) {
        carta.innerHTML += `
        <div class="carta flip" onclick="rotacionar(this)" data-identifier="card">
            <div class="front-face face" data-identifier="front-face">
                <img src="imagens/front 13.png" alt="Papagaio">
            </div>
            <div class="back-face face" data-identifier="back-face">
                <img src="imagens/${cartas[i]}.gif">
            </div>
        </div>
        `;
    }
}
cartasHTML();

console.log(cartas);
//virar cartas
let  numJogadas = 0;
let carta1;
let carta2;
function rotacionar(card) {
    if (card.classList.contains("flip")) {
        card.classList.remove("flip");
        numJogadas++;
    }
    else {
        card.classList.add("flip");
        numJogadas++;
    }

    if (!carta1) {
        carta1 = card;

        return false;
    } else {
        carta2 = card;
    }
       
    // if (carta1.innerHTML != carta2.innerHTML) {
    //     card.classList.add("flip");
        
    // }  

    comparar(carta1, carta2);
}
 

//comparar as duas cartas
function comparar(carta1, carta2) {
    if (carta1.innerHTML != carta2.innerHTML) {
        setTimeout(removerFlip, 1000);
        
    } 
}

function removerFlip() {
    let card = document.querySelector(".carta");
    if (card.classList.contains("flip")) {
        card.classList.remove("flip");
    }
}


//clock
let ss = 0;
let tempo = 1000;
let cont;

function clock() {
    cont = setInterval(() => { timer(); }, tempo);
}

function timer() {
    ss++;
    let formato = (ss < 10 ? '0' +  ss : ss + 's');
    let elemento = document.querySelector(".contador");
    elemento.innerHTML = formato;
}
