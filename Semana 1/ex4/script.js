let dado = prompt("Digite um dado :");

// Converte o dado para número (se for possível)
let dadoConvertido = Number(dado);

// Verifica o tipo do dado
let VerificarTipo = confirm("Você deseja verificar o tipo do dado informado?");

if (VerificarTipo) {
    if (dado === null) {
        alert("O tipo do dado informado é: null");
    } else if (dado === "true" || dado === "false") {
        alert("O tipo do dado informado é: string (valor booleano em string)");
    } else if (isNaN(dadoConvertido)) {
        alert("O tipo do dado informado é: string");
    } else {
        alert("O tipo do dado informado é: number");
    }
} else {
    alert("Dado não confirmado");
}
