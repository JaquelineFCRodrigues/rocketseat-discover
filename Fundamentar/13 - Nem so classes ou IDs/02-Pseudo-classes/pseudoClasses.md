# Pseudo-classes

    É um tipo de seletor que irá selecionar um elemento que estiver em um estado específico.

    Exemplo: É o primeiro elemento dentro de uma caixa, ou, o elemento está com o ponteiro do mouse sobre ele.

    Pseudo-classes começam com 2 pontos seguido do nome da pseudo class :pseudo-class-name

## first-child

    É quando queremos selecionar o primeiro filho de um grupo de elementos.

## nth-of-type

    Pega o elemento por tipo e posição

## nth-child

    É quando queremos selecionar o primeiro filho de um grupo de elementos.

## nth-child odd e even

    :nth-child(odd) e :nth-child(even)
    even - números pares
    odd - números ímpares

## Hover e Focus

    Ações do usuário
    Algumas estilos só são aplicados quando o usuário faz alguma ação na página.

        :hover

        a:hover {
        color: red;
        }
    Vai mudar a cor do link para vermelho quando o usuário passar o mouse sobre o link

    :focus é aplicado quando o elemento recebe o foco da ação do usuário que pode ser feita utilizando o teclado ou clicando no elemento com o mouse. É comumente usado em campos de input como uma forma de mostrar qual o input "ativo".

        input:focus {
        border-color: red;
        }

## Como conseguir ajuda

    Referência
    https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes