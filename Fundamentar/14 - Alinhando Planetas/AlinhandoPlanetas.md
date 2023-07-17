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

## Multiplas Linhas

- Flex-wrap
- Podemos usar multi linhas
- Cada nova linha, um novo flex container

## Direção e multi linha em uma única propriedade

- Flex-flow
- shorthand
- felx-direction || flex-wrap

## Alinhamento dos itens no eixo principal

### justify-content

- Alinhamento dos elementos dentro do container
- Distribuição dos elementos

* valores

- flex-start
- flex-end
- center
- space-around
- space-between
- space-evenly

## Alinhamento dos itens no eixo cruzado

### align-items

- Alinhamento dos elementos no eixo cruzado

* valores

- stretch
- flex-start
- flex-end
- center

## Espaço entre os elementos

### Gap
- Espaços entre os elementos

## Valores
Unidades de medidas
fixas: px, pt
flexíveis: %, em, rem

# Propriedades para os Itens

- flex-basis (mudar o tamanho do item) 
- flex-grow (adapta e faz o item crescer)
- flex-shrink (adapta e faz o item encolher)
- flex (shorthand para os três anteriores)
- order (como ordenar)

## Largura e altura com flex-basis

- Ficar sempre atento ao eixo pois ele é aplicado no eixo principal.

## Crescimento e adaptação dos itens (flex-grow)

- O crescimento do item dentro do container em relação aos espaços vazios.
- Separa em "frações" ou "fragmentos" do espaço disponível.

## Encolhimento e encaixe dos elementos (flex-shrink)

- Encolher o item dentro do container.

## Shorthand flex

- shorthand
- flex-grow flex-shrink flex-basis
- podem ter 1, 2 ou 3 valores

## Alterando tamanho de múltiplos itens

## Ordenando itens

- Order serve para ordenar elementos dentro de uma caixa.
- Muda de maneira visual e não estrutural!
