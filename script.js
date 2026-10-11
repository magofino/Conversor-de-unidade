const campoValor = document.getElementById('valor')
const campoResultado = document.getElementById('resultados')
const selectOrigem = document.getElementById ('unidadeOrigem')
const selectDestino = document.getElementById ('unidadeDestino')

const fatores = {
    km:1000,
    m:1,
    milha:1609.34,
};

function converter () {
    const numero = Number(campoValor.value);
    const origem = selectOrigem.value;
    const destino = selectDestino.value;
    const resultado = numero * fatores[origem] / fatores[destino]
    campoResultado.textContent = resultado.toFixed(2) + " " + destino;
}

campoValor.addEventListener('input', converter);
selectOrigem.addEventListener('change', converter);
selectDestino.addEventListener('change', converter);

const botaoInverter = document.getElementById('inverter')

botaoInverter.addEventListener('click', function(){
        const guardado = selectOrigem.value;
        selectOrigem.value = selectDestino.value
        selectDestino.value = guardado;
        converter ();  
})