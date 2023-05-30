# Layouts e evolução

Layout tem a ver com a maneira que os elementos estão distribuídos na tela.

## Normal Flow

Ou Flow Layout é a maneira que os elementos `block` e `inline` ficam na página.

## Tables

É a maneira de tabelas onde a tag `table` recebe um display `table` fazendo com que os elementos internos como `td` e `tr`possam ser usados para montar uma tabela.  

## Tableless

Uso das propriedades `float`, `clear` para que os elementos possam mudar de posição na tela.

## Flexbox

A caixa se torna flex, fazendo com que os elemnetos internos possam receber melhor: 

- Alinhamento
- Ordenação
- Tamanhos flexivéis

# Terminologia

- Flex Container
    - Flex item
-Nesting
- Axis (Eixo)
    - main
        - start, end
    - cross
        - start, end
- Flex Sizing
    - Flexível
    - altera width/heigt dos itens para preenchimento dos espaços do flex container.

# Propriedades do Flex Container

* Direção dos itens
* Multi linhas
* alinhamento
    * principal
    * cruzado
* espaços entre os itens

## Direção dos itens

- Flex é uma dimensão (horizontal ou vertical)
- podemos mudar a direção com `flex-direction`
- valores: (row | row-reverse | column | column-reverse)
