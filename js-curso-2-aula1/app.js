let listaDenumerosSorteados = [];
let numeroLimite = 10
let numSecreto = gerarNumAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
   let campo = document.querySelector(tag);
   campo.innerHTML = texto; 
   responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número Secreto!')
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10:')
}
    exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
      
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
       
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativas}`;
       
        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
   
    }else{
        if (chute > numSecreto) {
            exibirTextoNaTela('p', 'O numero secreto é menor!');
        }else{
          exibirTextoNaTela('p', 'O numero é maior! '); 

        }tentativas++;
        limparCampo();
    }
}

function gerarNumAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeelementosNaLista = listaDenumerosSorteados.length;

    if (quantidadeDeelementosNaLista == numeroLimite) {
        listaDenumerosSorteados = [];
    }
    if (listaDenumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumAleatorio();
    }else{
        listaDenumerosSorteados.push(numeroEscolhido);
        
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
        chute.value = '';
}

function reiniciarJogo() {
    numSecreto = gerarNumAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}