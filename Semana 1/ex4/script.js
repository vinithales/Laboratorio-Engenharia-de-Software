let dado = prompt("Digite um dado :");

let VerificarTipo = confirm("Você deseja verificar o tipo do dado informado?");

if (VerificarTipo) {
    alert("O tipo do dado informado é: " + typeof dado);
} 