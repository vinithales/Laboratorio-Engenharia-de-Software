let numero = prompt("Digite um número inteiro positivo: ");


if (isNaN(numero) || numero <= 0) {
    alert("Por favor, insira um número inteiro positivo válido.");
} else {
    numero = parseInt(numero); 

    if (numero <= 1) {
        alert("Número não é primo!");
    } else {
        let primo = true; 

       
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                primo = false; 
                break; 
            }
        }

       
        if (primo) {
            alert("O número " + numero + " é primo.");
        } else {
            alert("O número " + numero + " não é primo.");
        }
    }
}