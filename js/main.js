import { converter } from './conversor.js';

const campoValor = document.getElementById('valor');
const campoResultado = document.getElementById('resultados');
const selectOrigem = document.getElementById('unidadeOrigem');
const selectDestino = document.getElementById('unidadeDestino');
const botaoInverter = document.getElementById('inverter');

function atualizarResultado() {
    if (campoValor.value === '') {
        campoResultado.textContent = '';
        return;
    }

    const numero = Number(campoValor.value);
    const origem = selectOrigem.value;
    const destino = selectDestino.value;
    const resultado = converter(numero, origem, destino);

    campoResultado.textContent = resultado.toFixed(2) + ' ' + destino;
}

function inverterUnidades() {
    const guardado = selectOrigem.value;
    selectOrigem.value = selectDestino.value;
    selectDestino.value = guardado;
    atualizarResultado();
}

campoValor.addEventListener('input', atualizarResultado);
selectOrigem.addEventListener('change', atualizarResultado);
selectDestino.addEventListener('change', atualizarResultado);
botaoInverter.addEventListener('click', inverterUnidades);
