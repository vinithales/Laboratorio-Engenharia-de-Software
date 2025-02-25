let dado = prompt("Digite um dado :");


let dadoConvertido = Number(dado);



    if (dado === null) {
        alert("O tipo do dado informado é: null");
    } else if (dado === "true" || dado === "false") {
        alert("O tipo do dado informado é: string (valor booleano em string)");
    } else if (isNaN(dadoConvertido)) {
        alert("O tipo do dado informado é: string");
    } else {
        alert("O tipo do dado informado é: number");
    }

