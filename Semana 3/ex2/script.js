document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let anoAtual = new Date().getFullYear();
    let carro = {
        marca: document.getElementById('marca').value,
        modelo: document.getElementById('modelo').value,
        ano: parseInt(document.getElementById('ano').value),
        cor: document.getElementById('cor').value,
        kilometragem: parseInt(document.getElementById('kilometragem').value),
        valor_fipe: parseFloat(document.getElementById('valor_fipe').value),
        anosUtilizacao: function() {
            return anoAtual - this.ano;
        },
        valorMercado: function() {
            let kmAno = this.kilometragem / this.anosUtilizacao();
            if (kmAno <= 30000) return this.valor_fipe * 1.1;
            if (kmAno <= 50000) return this.valor_fipe;
            return this.valor_fipe * 0.9;
        }
    };
    document.getElementById('resultado').innerHTML = `Anos de utilização: ${carro.anosUtilizacao()}<br>Valor de mercado: R$ ${carro.valorMercado().toFixed(2)}`;
});