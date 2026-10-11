# Conversor de Unidades

Um conversor de unidades simples feito com HTML, CSS e JavaScript puro. Você digita um valor, escolhe as unidades de origem e destino e o resultado aparece na hora.

## Demonstração

> Link do GitHub: `https://magofino.github.io/conversor-de-unidades/`

## Funcionalidades

- Conversão de distância entre quilômetros, metros e milhas
- Resultado atualizado automaticamente ao digitar ou trocar as unidades
- Botão para inverter as unidades de origem e destino
- Layout centralizado em formato de card

## Tecnologias

- HTML5
- CSS3 (Flexbox)
- JavaScript (sem bibliotecas)

## Como usar

1. Baixe ou clone o repositório:
   ```bash
   git clone https://github.com/magofino/conversor-de-unidades.git
   ```
2. Abra o arquivo `index.html` no navegador.

Não precisa instalar nada.

## Estrutura do projeto

```
conversor-de-unidades/
├── index.html
├── script.js
├── css/
│   └── style.css
└── README.md
```

## Como funciona

Todas as unidades são convertidas usando o metro como base. Um objeto guarda quantos metros vale cada unidade, e a conta é:

```
resultado = valor × fator da origem ÷ fator do destino
```

## Próximas melhorias

- [x] Adicionar mais unidades de distância (cm, pé, jarda)
- [x] Tratar o campo vazio
- [ ] Adicionar a categoria peso
- [ ] Adicionar a categoria temperatura
- [ ] Efeito hover nos botões

## Autor

Feito por **Rauan Guilherme Faustino Abdon**.