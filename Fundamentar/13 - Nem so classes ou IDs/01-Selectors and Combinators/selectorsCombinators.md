# Seletores

    Conecta um elemento HTML com o CSS a fim de alterar o elemento.

## Element Selector

    Todos os elementos HTML

## ID Selector

    Um elemento que tenha um atributo id
    Cada id deverá ser único
    Usa-se # para indicar um ID selector

## Class Selector

    Os elementos com atributo class
    Podemos ter uma ou mais classes
    Usa-se . para indicar um class selector
    Todos os elementos com a mesma class são alterados

## Attribute Selector

    Um elemento que tenha um atributo específico

## Pseudo-class Selector

    Elementos em um estado específico

## Múltiplos
    É possível selecionar múltiplos elementos e aplicar alguma regra CSS para todos eles.

    Usamos uma separação por vírgulas para isso.

# Combinators

    Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização

## Descendant combinator
    Identificado por um espaço entre os seletores
    Busca um elemento dentro de outro, mesmo que existam outros elementos no caminho.

## Child combinator

    Identificado pelo sinal > entre dois seletores
    seleciona somente o elemento que é filho direto do pai
    Elementos depois do filho direto serão desconsiderados

## Sibling Combinator
### Adjacent sibling combinator

    Identificado pelo sinal + entre dois seletores
    Seleciona somente o elemento do lado direito que é irmão direto na hierarquia

### General sibling combinator

    Identificado pelo sinal ~ entre dois seletores
    Seleciona todos os elementos irmãos

# Dica:
    Seletores muito específicos tendem a causar dificuldades no reuso das regras de estilização
    Muitas vezes, um simples uso de classes, torna o trabalho mais eficiente