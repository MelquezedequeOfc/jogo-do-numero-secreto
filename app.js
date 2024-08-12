let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', 
    {rate:1.2});
}

    function exibirMensagemInicial() {
        exibirTextoNaTela('h1', 'Jogo do número secreto');
        exibirTextoNaTela('p', `Escolha um número de 1 e 10:`);
    }

exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemtentativa = `Você descobriu o número secreto com ${tentativas} ${palavratentativa}!`
        exibirTextoNaTela('p', mensagemtentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(chute > numeroSecreto) {
        exibirTextoNaTela('p', 'o número secreto é menor..');
    } else {
        exibirTextoNaTela('p', 'o número secreto é maior..');
    } 
    tentativas++
    limparChute()
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio;
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparChute() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparChute();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',
    true);
}