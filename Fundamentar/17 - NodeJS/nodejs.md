# O que podemos fazer com o NodeJS?

- Backend
- Frontend
- Micro serviços
- API
  * WebApp
  * Mobile
  * Desktop
- Scripts e Automação
- Machine learning
- I.A

Caso precise de muito processamento ou seja, CPU não é recomendado usar NodeJS. (Ex. Processamento de imagens e vídeos)

# Vantagens

- Rápido
  * Execução
  * Prototipar
- Alta Escalabilidade
- Aplicações de ponta
- JS everywhere
- Ecosistema gigante
- Casos de uso
  * Netflix
  * Paypal

# O que é o NodeJS?

Ele é um JS Runtime Enviroment, ou seja um ambiente de execução. Não é um framework nem uma linguagem de programação.

# Google V8 - Javascript Engine

Compõe o ambiente, a máquina virtual que irá rodar o JS na máquina

- Interpretador de JavaScript para linguagem de máquina
- Criado com C++
- Baseado nas últimas features do JS
- Focado para Chrome mas tem todo cuidado de não quebrar o Node
- Não possui a DOM, console ou File System

# Como funciona?

Node é single-threaded, non-blocking e asynchronous.

# Avançando no entendimento e funcionamento

# De onde veio e pra onde vai o NodeJS?

# Istalando Nodejs

# REPL
- Read-Eval-Print-Loop
- Escrever Javascript em um ambiente node dentro do terminal
- Para entrar digite node no terminal

## VS Code

# Iniciando na Prática

## Executando o primeiro arquivo e entendendo globais

Lembrar de sempre olhar a documentação no site no Node.

## O que são e como utilizar módulos?

Require é uma maneira de chamar módulos nativos, criados ou instalados no node.

## Criando módulos

## Pegando Informações do processo

## Passando flags como argumento

--name
--greeting

## Desafio
* Crie 2 arquivos JavaScript.
* O primeiro, irá exportar um função chamada getFlag() que receberá um argumento do tipo String.
* Essa função deverá buscar dentro do array a flag e retornar o valor da flag.

* O segundo irá importar a função e passar a flag desejada.

* Iremos rodar no terminal o segundo arquivo passando as flags --name e --greeting para que seja impresso no terminal a saudação e o nome da pessoa.