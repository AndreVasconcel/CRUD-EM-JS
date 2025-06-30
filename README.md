# Projeto 1(Sprint 1) - CompassUOL  
**Artificial Intelligence with AWS - Jun/2025**

## Descrição  
Um sistema para armazenamento e gerenciamento de dados cadastrais de usuários, utilizando o padrão de projeto **Factory**.  
Para o armazenamento dos dados, foi utilizado o **LocalStorage** do navegador.

## Detalhes das Funcionalidades
Cadastro:
O usuário preenche um formulário com nome, data de nascimento, telefone e e-mail. Os dados são encapsulados em uma instância da CadastroFactory e armazenados em um array no LocalStorage.

Consulta:
Permite buscar um usuário pelo e-mail. O sistema procura no LocalStorage e exibe as informações encontradas, caso existam.

Deleção:
Após inserir um e-mail, o sistema verifica se o usuário existe e solicita confirmação antes de excluí-lo do LocalStorage.

Listagem:
Lista todos os usuários cadastrados. Os dados são exibidos em cartões organizados em coluna.

## Dificuldades Encontradas
1. Gerenciamento do localStorage

Inicialmente, houve confusão sobre como armazenar múltiplos usuários sem sobrescrever os anteriores.
A solução foi utilizar um array de objetos no localStorage, convertendo-o com JSON.stringify() e JSON.parse() para manter a persistência dos dados.

2. Layout Responsivo

Um dos principais desafios foi garantir que o sistema tivesse um layout responsivo e amigável, adaptando-se bem a diferentes tamanhos de tela, especialmente em dispositivos móveis.
A solução foi utilizar Flexbox para organizar as seções lado a lado em telas maiores. Para telas menores, foi aplicada uma media query que altera a direção do layout para column-reverse, facilitando a navegação em celulares.

## Como Executar o Projeto Localmente
Siga os passos abaixo para rodar o sistema em sua máquina local:

1. Clone o repositório;
2. Abra o projeto em uma IDE ou editor de código, como o Visual Studio Code;
3. Abra o terminal integrado e navegue até a pasta do projeto;
4. Execute o projeto com o Live Server;

O navegador abrirá automaticamente com o sistema em funcionamento.

## Tecnologias Utilizadas
1. JavaScript  
2. HTML
3. CSS  
4. LocalStorage

## Desenvolvido por 
**André Vasconcelos**