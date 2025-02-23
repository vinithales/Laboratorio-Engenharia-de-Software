let numero = prompt("Digite um número inteiro positivo: ");


if (isNaN(numero) || numero <= 0) {
    alert("Por favor, insira um número inteiro positivo válido.");
} else {
    if (numero % 2 === 0) {
        alert("O número " + numero + " é par.");
    } else {
        alert("O número " + numero + " é ímpar.");
    }
}