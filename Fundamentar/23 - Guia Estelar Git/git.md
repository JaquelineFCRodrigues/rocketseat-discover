# Instalando git no Windows

Ao entrar no site https://git-scm.com, vá até download, e automaticamente começará a baixar o arquivo, e assim que terminar, execute-o.

Após executado, apenas pressione next até chegar na janela de editor padrão para o git. (Recomendamos o vim, mas caso não tenha muito conhecimento do vim, selecione o Visual Studio Code porém, se não o tiver instalado em sua máquina, ele não lhe permitirá continuar a instalação)

Novamente, apenas pressione next até a instalação realmente começar, e apenas espere até ser concluída, pode desmarcar a última opção e o git foi instalado com êxito.

# Configuração inicial

Primeiramente, abra o seu terminal e digite:

`git config --global user.name "Seu nome completo entre aspas"`
`git config --global user.email seuemailaqui@dominio.com`

Isso é importante porque em cada commit essa informação será utilizada, e é carimbada de forma imutável nos commits que você começa a criar.

Caso você queira substituir essa informação para um projeto específico, apenas rode o comando sem a opção --global dentro daquele projeto.

Caso queira trocar o editor padrão, que é o vim, pelo VS Code, rode o comando abaixo:

`git config --global core.editor "code -w"`

Por fim, caso queira verificar as suas configurações, apenas rode o comando abaixo:

`git config --list`

# Git help

Para termos ajuda com o git, podemos usar o comando `git help`, onde você vai obeter informações sobre praticamente tudo no git, basta colocar git help + a área (exibida com o comando git help) na qual sua dúvida se encaixa e procurar sua resposta.

Para sair do menu de ajuda, use o comando `:q`

# Iniciando um repositório

Após selecionarmos a pasta desejada, iremos rodar o comando `git init`, e assim que for executado, o nosso repositório será criado.

Você pode notar que aparentemente nada foi adicionado no diretório, mas caso rode o comando `ls -a`, verá que aparece uma pasta .git, que é justamente o que queríamos.

# O git guarda o histórico do projeto

Aqui veremos onde o git guarda o histórico do nosso projeto, todos os detalhes e arquivos, tudo que estamos fazendo dentro do projeto.

Apenas rode o comando a seguir:

`ls -al .git`

Verá que há alguns arquivos nessa pasta, e são exatamente esses arquivos que nos trazem as informações do Git.

Atenção: Nunca delete a pasta git caso não esteja na nuvem, ela é seu repositório, no caso de você deletá-la, perderá todo o histórico do seu projeto.

# O primeiro commit

Nesta aula iremos criar nosso primeiro commit, nosso primeiro ponto na história.

Primeiro iremos preparar nosso arquivo para isso, através do comando add, usado da seguinte forma:

`git add .`

O . nesse caso serve para selecionarmos todos os arquivos dentro do diretório.

Assim que tivermos executado esse comando, podemos criar nosso commit, da seguinte forma:

`git commit -m "mensagem do commit, é obrigatória, então não se esqueça!"`

E assim criamos nosso primeiro ponto na história!

# Git log

Assim que rodar o comando no seu projeto, verá que temos uma hash, do tipo SHA-1, e também teremos entre parênteses o nosso branch, nesse caso o master, e no commit (sua hash), teremos o autor do commit, a data do mesmo e a mensagem do commit.

Caso queiramos um resultado menor desse comando, podemos usar a opção --oneline, da seguinte forma:

`git log --oneline`

Ele vai encurtar a hash, retirar o autor, a data e exibir a mensagem do commit ao lado.

Suponhamos que você tem 50 commits, e precisa apenas dos últimos 5, nesse caso, rode o comando a seguir:

`git log -n 5`

Ou seja, apenas coloque o argumento -n e a quantidade dos últimos commits que deseja.

Caso queira ver os commits após uma data específica, utilize o argumento --since, da seguinte forma:

`git log --since=aaaa-mm-dd`

Já caso queira os commits antes de uma data específica, use o argumento --until, da seguinte forma:

`git log --until=aaaa-mm-dd`

Você também pode aplicar um filtro para o autor do commit, para procurar os commits de uma pessoa em específico, usando o argumento --author, utilizado da seguinte forma:

`git log --author=nomedoautor(nao precisa ser completo)`

Também temos a forma mais poderosa de se utilizar o git log que é com o argumento grep, usado da seguinte forma:

`git log --grep="o que quer que esteja buscando, ex: bugfix"`

Basicamente significa expressão regular global, é muito comum na programação, e vai ser usado para buscar na mensagem do commit o que quer que você esteja buscando.

# Estágios do arquivo

Veremos nesta aula sobre os três estados dos arquivos dentro do git.

Para podermos iniciar um projeto, colocamos o git init (ou git clone, caso queiramos copiar os arquivos de outro repositório, mas veremos isso mais adiante), após isso, o git vai iniciar um repositório local, fazendo com que nosso arquivos fiquem no Working Directory, a primeira etapa do processo. Após isso, faremos o git add, que nos coloca na Stage Area, a segunda etapa do processo, e finalmente faremos um commit, para levar nossos arquivos até o repositório local.

O working Directory é o diretório no qual se encontra nosso projeto, então os arquivos são preparados para serem commitados, a Stage Area, onde nosso arquivos ficam preparados, para podermos enfim criarmos o nosso commit, e é a partir desse ponto em que nosso arquivo fica salvo como um ponto na história

# Git Workflow

Nessa aula falaremos sobre como funciona o workflow do git, que vimos na aula passada, onde criamos o primeiro arquivo, passamos pela stage area, e adicionamos ao repositório.

Primeiramente suponhamos que temos um arquivo, e nós o preparamos através do git add. Isso significa que ele teve uma cópia de si feita, e essa cópia foi enviada para a nossa stage area, então temos dois arquivos, onde podemos trabalhar em nosso working directory, enquanto nossa versão no stage area continua a mesma, podendo ter duas versões diferentes do nosso arquivo.

Podemos então colocar ele no nosso repositório local, através do comando git commit, onde criamos um ponto na história, onde temos nosso arquivo naquele momento do tempo.

Agora faremos uma alteração nesse arquivo, e teremos então o arquivo (v2), e faremos o mesmo processo para ele, passando para o stage area, e iniciando um commit, então no nosso repositório teremos a v1 e a v2, a v2 ficando por último, visto que é uma linha do tempo, então podemos criar a v3 e fazer o mesmo processo, criar a v4 e repetir, e nós teremos todas as versões do nosso arquivo salvas dentro do nosso repositório.

Podemos voltar atrás em todas as versões dos arquivos, porém a numeração não será bonitinha, teremos que usar a hash, sobre a qual falaremos na próxima aula.

# Hash SHA-1

Nessa aula, falaremos sobre o nome dado à cada commit, que é dado através de uma hash chamada SHA-1.

A cada commit que criamos, o git vai gerar um checksum, que converte os dados da nossa operação em um número, o que garante a integridade dos nossos dados. Essa hash é uma linha de 40 caracteres hexadecimais.

Dentro dessa string existe uma snapshot, que mostra o autor, o pai e a mensagem do nosso commit.

O pai do commit é o commit do qual ele foi criado, então o nosso primeiro commit sempre terá um valor nulo, enquanto os próximos terão o valor do commit anterior a ele.

# HEAD

No git, a HEAD é um ponteiro, que nos aponta em que ponto da história estamos, em qual commit nós estamos, e nas próximas aulas veremos como fazer para irmos em outros pontos na história, outros commits.

(Não é necessário entender as minúcias de como o git funciona, precisamos entender como funciona, não todos os detalhes exatos de todo o funcionamento do git. Nosso foco tem de ser em como fazê-lo uma ferramenta da qual possamos usar no nosso dia-a-dia, certo?)

# Adicionando arquivos com git add

Falaremos nesse vídeo sobre como adicionar arquivos ao nosso repositório, você já deve ter compreendido, mas é sempre bom termos essa certeza, para não termos nenhuma dúvida do git add, certo?

Primeiramente temos o Working Directory, as vezes também chamado de working tree, é o local onde estamos trabalhando, mas não é aqui onde a magia ocorre, na verdade é na Stage Area, as vezes também chamada de Index ou ainda de Stage tree, é aqui onde seus arquivos vão ser preparados para poderem ser salvos no repositório, que é o banco de dados dos nossos arquivos, onde todos os nossos commits vão ser salvos.

Mas vamos começar pelo cenário de que nós temos um arquivo em uma pasta, que precisamos rastrear, antes de tudo vamos iniciar o git através do comando `git init`, assim que nosso diretório estiver pronto, vamos usar o comando git add + o nome do arquivo que queremos adicionar ao nosso Stage Area, mas também podemos fazer isso de outra forma, que é o comando `git add .`(ponto) , que vai levar todos os arquivos e pastas do nosso working directory ao stage area, o que não é recomendado, já que é melhor fazer uma série de pequenos commits, mas ainda é possível realizar um commit com quantos arquivos quisermos.

Uma outra maneira de adicionar múltiplos arquivos além do `git add .`(ponto), é possível adicionar arquivos por sua extensão, através do comando `git add *.`(extensão do arquivo).

# Editando arquivos

Nessa aula aprenderemos a editar nossos arquivos, então, supondo que tenhamos editado nossos arquivos e não tenhamos feito a adição dele ao nosso stage area já modificado, podemos usar novamente o comando `git add`, ou seja, o `git add` serve tanto para adicionar novos arquivos ao nosso stage area, como também as modificações feitas nos nossos arquivos, que no nosso repositório vão virar outros commits.

# Modificações com git diff

As vezes estamos tão focados nas modificações dos nossos arquivos que nem nos lembramos de todas as modificações que foram feitas, e o git pode nos ajudar com isso.

Ao usar o comando `git diff`, ele nos mostra um registro das modificações feitas nos arquivos que já tínhamos guardados no nosso repositório, porém, em arquivos não rastreados pelo git, não será possível ver as alterações.

A ferramenta `git diff` é muito poderosa para ver a diferença entre os arquivos que temos no nosso repositório e no nosso working directory.

# Git diff staged

No último vídeo vimos como funciona o `git diff`, mas agora vamos ver o comando que usamos para ver as diferenças entre um arquivo que exista no stage area e no repositório, o `git diff staged`, que é basicamente a mesma coisa, funciona da mesma forma, porém vai comparar as modificações dos arquivos na stage area e no repositório, ao invés dos arquivos do working directory e do repositório.

# Deletando arquivos

Caso queiramos deletar um arquivo através do git, podemos usar o comando a seguir:

`git rm nomedoarquivo`

(Atenção: caso delete algum arquivo que não esteja no repositório, ele se foi por toda a eternidade, então tome cuidado, pois ele não vai ser enviado para a lixeira.)

# Renomeando arquivos

Nesta aula veremos como renomear arquivos através do git.

Podemos renomear o arquivo manualmente, e se rodarmos o comando `git status` veremos que ele mostra o arquivo com nome antigo como removido, e o novo nome consta como não rastreado.

Podemos então usar o `git rm (nome antigo)`, e `git add (novo nome)`, e assim que rodarmos o git status novamente poderemos observar que ele consta agora como renamed (nome antigo) → (nome novo).

Podemos também fazer isso em um único passo, usando o comando git mv, cuja sintaxe é:

`git mv nomeatual.txt novonome.txt`

Ao rodar novamente o comando git status veremos que consta como renamed: nomeatual.txt → novonome.txt.

# Movendo arquivos

também podemos mover arquivos através do git, usando o comando git mv, usado da seguinte forma:

`git mv arquivoquevaimover nomedodiretório/arquivoquevaimover`

# Desfazendo modificações

Nesta aula, veremos como reverter alterações que foram feitas no seu arquivo, que você possa ter feito sem querer e ter salvo no seu editor.

Apenas rode o comado a seguir:

`git restore nomedoarquivo`

Esse comando vai fazer com que as alterações sejam descartadas, ao pegar uma versão anterior do arquivo no seu repositório.

# Trazendo de volta do staged

Nesta aula veremos como desfazer alguma alteração que foi ao nosso stage area, e na verdade é bem simples, usamos o comando a seguir:

`git restore --staged nomedoarquivo`

Há também outra forma, que é no caso de termos múltiplos arquivos, e é usado da seguinte forma:

`git restore --staged .`

Podemos rodar o comando git status para conferir a remoção do(s) arquivo(s) do stage area.

# Corrigindo o último commit

Caso queiramos alterar algo de importante no nosso mais recente commit, como a mensagem, vamos usar uma opção do comando commit, que é a --amend, dessa forma:

`git commit --amend -m "nova mensagem"`

O git commit --amend também serve para modificar o conteúdo do commit, podendo servir para remover arquivos ou adicionar novos arquivos mas apenas válidos para o último commit, não tente modificar outros commits, pois isso é algo muito avançado e vai ser uma grande dor de cabeça.

# Recuperando Arquivos

Podemos recuperar nossos commits antigos usando o comando git checkout.

Primeiramente usamos o git log para encontrar o commit que precisamos, e copiamos os primeiros caracteres da hash, após isso, podemos rodar o comando, da seguinte forma:

`git checkout HASH -- nomedoarquivo`

(Cuidado, caso haja um arquivo de mesmo nome e formato, será inteiramente substituído, fazendo com que você precise pegar a versão mais recente num último commit)

# Removendo Arquivos não rastreados

Veremos nesse vídeo como remover um ou mais arquivos não rastreados.

O comando `git clean` vai deletar tudo que não está rastreado no seu master branch, mas cuidado, ele será apagado para sempre, não será possível recuperá-los, pois não vão para um lixeira.

Caso queira confirmar o que o comando vai fazer use a opção -n, que vai mostrar os arquivos que o git vai apagar.

# Revertendo um commit

Agora veremos como reverter um commit, como pegar um ponto antigo da história, revertê-lo e adicionar um novo ponto.

O primeiro passo é ter um diretório limpo, sem nenhum arquivo não rastreado, sem nada na stage area.

Usaremos então o comando git log, e onde nossa HEAD estiver, a cada commit subtrairemos 1, então, considere o commit atual como 0, o abaixo desse -1, o abaixo desse -2 e por aí vai.

Use o comando git revert, mas ao invés de um sinal de menos(-), use um til (~), da seguinte maneira:

`git revert HEAD~5`

Também há outra forma de fazer isso, que é usando a hash de onde exatamente você deseja reverter, hash que pode ser obtida facilmente através do comando git log --oneline, ficaria parecido com:

`git revert 7f121d7`

