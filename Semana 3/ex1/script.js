document.getElementById('campo').addEventListener('click', ()=>{
    var valor = document.getElementById('valor').value;
    var lista = document.querySelectorAll('ul');
    var valores = new Array();
    
    valores.push(valor);

    var valoresOrdenados = valores.sort();

    for (let i = 0; i < valoresOrdenados.length; i++) {
        let novoLi = document.createElement("li");

        novoLi.textContent(valoresOrdenados[i]);

        lista.appendChild(novoLi);
    }

});