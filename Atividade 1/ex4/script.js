
let dado = prompt("Digite um dado :");


let VerificarTipo = confirm("Você deseja verificar o tipo do dado informado?");

if (VerificarTipo) {

    document.body.innerHTML = "<h1>O tipo do dado informado é: " + typeof dado + "</h1>";
} else {
    
    document.write("<h1>Dado não confirmado</h1>");
}
