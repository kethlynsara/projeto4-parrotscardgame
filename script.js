let numCartas = 0;
let qtdCarta = 0;
let vetorIndices = [0,1,2,3,4,5,6];

// pede a qtd de cartas do jogo
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
        <div class="carta flip" data-identifier="card">
            <div class="front-face face" onclick="rotacionar()" data-identifier="front-face">
                <img src="imagens/front 13.png" alt="Papagaio">
            </div>
            <div class="back-face face" onclick="rotacionar()" data-identifier="back-face">
                <img src="imagens/${cartas[i]}.gif">
            </div>
        </div>
        `;
    }
}
cartasHTML();

function rotacionar() {
    const card = document.querySelector(".carta");
    if (card.classList.contains("flip")) {
        card.classList.remove("flip");
    }
    else {
        card.classList.add("flip");
    }
}
    
