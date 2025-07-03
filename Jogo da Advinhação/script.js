function gerarNumero(){
    let numero_computador = Math.floor(Math.random()*101)+1;
    return numero_computador;
}

function escolherNumero(){
    let numero_usuario = Number(prompt("Palpite o número que o computador escolheu: (De 1 a 100)"));
    return numero_usuario;
}

function compararNumeros(numero_computador){
    for(let i=10;i>0;i--){
        numero_usuario = escolherNumero();
        if(numero_computador == numero_usuario){
            alert("Você acertou!!");
            return;
        }
        else if(numero_computador<numero_usuario){
            alert("O número secreto do computador é menor que o número escolhido.");
        }
        else{
            alert("O número secreto do computador é maior que o número escolhido.");
        }
        if(i>1){
            alert("Resta "+(i-1)+" tentativas");
        }else{
            alert("Acabou as tentativas");
        }
    }
    alert("Você não conseguiu! O número era "+numero_computador)
}

function iniciarJogo(){
    while(true){
        compararNumeros(gerarNumero());
        let resposta = prompt("Deseja jogar novamente? Sim ou Não");
        if(resposta.toUpperCase() == "NÃO"){
            break;
        }
    }
}