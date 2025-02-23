var texto = prompt("Digite um texto: ");

var re = /[\W_]/g;
var lowRegTexto = texto.toLowerCase().replace(re, '');
var reverseTexto = lowRegTexto.split('').reverse().join(''); 


if(reverseTexto === lowRegTexto){
    alert("É palindromo");
} else{
    alert("Não e palindromo");
}