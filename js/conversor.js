import { fatores } from './unidades.js';

// Converte um valor de uma unidade para outra, usando o metro como base.
// Não mexe na tela: só recebe números/textos e devolve um número.
export function converter(valor, origem, destino) {
    return (valor * fatores[origem]) / fatores[destino];
}
