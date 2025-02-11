let numero = prompt("Digite um numero inteiro positivo: ");

let fatorial = 1;

if(isNaN(numero) || numero <= 0){
    alert("Por favor, insira um número inteiro positivo válido.");   
} else{
    for(i = 0; i <= numero; i++){
        fatorial *= i;
    }
    alert("O fatorial de " + numero + " é " + fatorial);
}