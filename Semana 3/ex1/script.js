
let valores = [];

document.getElementById('campo').addEventListener('click', () => {
    var valor = document.getElementById('valor').value;
    var lista = document.querySelector('ul'); 

    valores.push(valor);

    var valoresOrdenados = valores.sort();

    lista.innerHTML = ''; 

    for (let i = 0; i < valoresOrdenados.length; i++) {
        let novoLi = document.createElement("li"); 
        novoLi.textContent = valoresOrdenados[i]; 
        lista.appendChild(novoLi); 
    }

    document.getElementById('valor').value = '';
});
