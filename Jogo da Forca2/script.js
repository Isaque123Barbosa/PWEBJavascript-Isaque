function palavraAleatoria() {
    let palavras = ["casa", "carro", "comida", "trabalho", "escola", "tempo", "dinheiro", "gente", "amigo", "família", "amor", "telefone", "mesa", "cadeira", "porta", "café", "livro", "sapato", "roupa", "viagem", "janela", "luz", "estrada", "ônibus", "chave"];
    
    
    let indicePalavra = Math.floor(Math.random() * palavras.length);
    
    return palavras[indicePalavra];
}

function verificarPalavra(letra, palavra, palavraEscondida) {
    let novaPalavra = palavraEscondida.split(""); 

    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] == letra) {
            novaPalavra[i] = letra; 
        }
    }

    return novaPalavra.join(""); 
}

function jogoDaForca() {
    while (true) {
        let palavraForca = palavraAleatoria();
        let palavraEscondida = "_".repeat(palavraForca.length); 
        let tentativas = 6;

        while (true) {
            alert(`Palavra: ${palavraEscondida}\nTentativas restantes: ${tentativas}`);
            let letra = prompt("Digite uma letra:");

            if (!letra || letra.length !== 1) {
                alert("Digite apenas uma letra.");
                continue;
            }

            let novaPalavra = verificarPalavra(letra.toLowerCase(), palavraForca, palavraEscondida);

            if (novaPalavra == palavraEscondida) {
                tentativas -= 1;
            } else {
                palavraEscondida = novaPalavra;
            }

            if (tentativas == 0) {
                alert(`Você perdeu! A palavra era: ${palavraForca}`);
                break;
            }

            if (palavraEscondida == palavraForca) {
                alert(`Parabéns! Você acertou a palavra: ${palavraForca}`);
                break;
            }
        }

        let resposta = prompt("Deseja jogar novamente? Sim ou Não");

        if (!resposta || resposta.toUpperCase() == "NÃO" || resposta.toUpperCase() == "NAO") {
            break;
        }
    }
}
