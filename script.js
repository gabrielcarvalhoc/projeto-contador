function contar() { 
    var inicio = document.getElementById('txtinicio');
    var fim = document.getElementById('txtfim');
    var passo = document.getElementById('txtpasso');
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (inicio.value.length != 0 && fim.value.length != 0 && passo.value.length != 0) {
        var i = Number(inicio.value);
        var f = Number(fim.value);
        var p = Number(passo.value);

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1');
            p = 1;
        }
        if (i < f) {
            for (i; i <= f; i += p) {
                resultado.innerHTML += `${i} &#x1f449; `;
            }
        } else {
            for (i; i >= f; i -= p) {
                resultado.innerHTML += `${i} &#x1f449; `;
            }
        }
        resultado.innerHTML += `&#x1F3C1;`;
    } else {
        resultado.innerHTML += 'Impossível contar!';
    }
}