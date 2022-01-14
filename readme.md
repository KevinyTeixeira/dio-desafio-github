# :books:Desafio de Projeto sobre Git/Github da DIO

Repositório criado para o desafio de projeto, incluir todas as atividades da [Digital Innovation One - DIO](https://web.digitalinnovation.one/home), executados pelo **Bootcamp Eduzz Fullsatck Developer**.



## :key:Algumas Coisas Importantes

1. Comandos importantes do *Prompt de Comando* (também utilizado no Git):

   - **`cls(win), clear(git, linux)`** - para apagar todo o histórico de comandos do prompt;

   - **`cd(win, git, linux)`** - para se transitar entre as pastas dos diretórios, também há a variante "cd .." para retornar à pasta anterior;
   - **`dir(win), ls(git, linux)`** - para mostrar a lista de diretórios contidos na pasta em que estiver, também há a variante **`dir -a(win), ls -a(git, linux)`** para mostrar inclusive os diretórios ocultos ;
   - **`mkdir(win, git, linux)`** - para criar uma pasta no diretório;
   - **`echo(win, git, linux)`** - retorna o que for inserido, entretanto se utilizado como **"echo > nome.extensão"**, ele cria o arquivo na extensão desejada, ótimo para criar um readme bem rápido sem sair do git em?! :happy:
   -  **`start(win, git, linux)`** - inicia um arquivo executável de qualquer tipo;
   - **`TAB`** - Sim, a tecla TAB tem a incrível função de abreviar algo que você deseja escrever, extremamente útil e vai agilizar muito a sua vida!

2. Comandos de iniciação do *Git*:

   - **`git init`** - inicia o versionamento na pasta em que estiver;
   - **`git config --global user.email "email"`** - configura o ambiente de versionamento para todos os repositórios, com essa identificação de e-mail; em caso da necessidade de alterar isso posteriormente, use *git config --global unset user.email*;
   - **`git config --global user.name "username"`** - configura o ambiente de versionamento para todos os repositórios, com essa identificação de usuário no github (é importante ressaltar que os dados aqui, devem refletir o usuário no Github); em caso da necessidade de alterar isso posteriormente, use *git config --global unset user.name*
   - **`git config --list`** - mostra todos os parâmetros da configuração atual do Git; para sair, use a tecla *q*;
   - **`git remote add nome (link)`** - direciona seu repositório local para um repositório na nuvem, o parâmetro *NOME* é apenas um apelido para que você possa referenciar o link sem tê-lo que mencionar novamente; você também pode posteriormente utilizar o comando **`git remote -v`** para consultar o repositório que está recebendo os arquivos locais.

3. A configuração do ambient com Git/Github com *chave SSH*:

   - Use o código abaixo no *Git*, para gerar uma chave SSH;

   - ```shell
     $ ssh-keygen -t ed25519 -C "seu_email@example.com"
     ```

   - **cat (chave gerada)** - use esse comando **(git, linux)** para "ler" o conteúdo da chave, em seguida vá até a página principal no *Github>settings>SSH and GPG keys>New SSH key* em seguida insira o seu conteúdo da chave no campo "key".

   - Calma que ainda não acabou!:laughing: Agora no *Git Bash*, você precisa executar o agente para que gerencie suas chaves.

   - ```shell
     $ eval "$(ssh-agent -s)"
     ```

   - A saída do comando será *"> Agent pid (número_qualquer)"*, o agente continuará executando em segundo plano. Agora como última etapa, você deve passar a chave privada para o agent com o seguinte código:

   - ```shell
     $ ssh-add "chave privada"
     ```

   - Pronto!:handshake: Agora você pode **usar todas as funcionalidades do git sem precisar se identificar o tempo todo**.

4. O editor de arquivos *Markdown(.md)*, muito útil para o Github:

   - **Typora** - [clique aqui para baixar o Typora](https://typora.io);
   - Lista completa de **[emoticons](https://gist.github.com/rxaviers/7360908)**:skull::smiley::collision:;

## :bookmark_tabs:Atividades

Abaixo, todas as atividades do **Bootcamp Eduzz Fullstack**:

- [x] ~~Boas-vindas ao **Bootcamp Eduzz Fullstack Developer**~~; :paperclip: [**[Certificado]**](https://github.com/KevinyTeixeira/dio-desafio-github/blob/main/Certificados%20Bootcamp%20Eduzz%20Fullstack%20Developer/1.%20Boas-vindas%20ao%20Bootcamp%20Eduzz%20Fullstack%20Developer.pdf)
- [x] ~~Bem-vindo à **DIO**~~; :paperclip: [**[Certificado]**](https://github.com/KevinyTeixeira/dio-desafio-github/blob/main/Certificados%20Bootcamp%20Eduzz%20Fullstack%20Developer/2.%20Bem-vindo%20%C3%A0%20DIO%20-%20Digital%20Innovation%20One.pdf)
- [x] ~~Projetos ágeis com **SCRUM**~~; :paperclip: [**[Certificado]**](https://github.com/KevinyTeixeira/dio-desafio-github/blob/main/Certificados%20Bootcamp%20Eduzz%20Fullstack%20Developer/3.%20Projetos%20%C3%A1geis%20com%20SCRUM.pdf)
- [x] ~~**Lógica de Programação** Essencial~~; :paperclip: [**[Certificado]**](https://github.com/KevinyTeixeira/dio-desafio-github/blob/main/Certificados%20Bootcamp%20Eduzz%20Fullstack%20Developer/4.%20L%C3%B3gica%20de%20Programa%C3%A7%C3%A3o%20Essencial.pdf)
- [x] ~~Introdução ao **Git e ao Github**~~; :paperclip: [**[Certificado]**](https://github.com/KevinyTeixeira/dio-desafio-github/blob/main/Certificados%20Bootcamp%20Eduzz%20Fullstack%20Developer/5.%20Introdu%C3%A7%C3%A3o%20ao%20Git%20e%20ao%20Github.pdf)
- [x] ~~Criando seu primeiro **repositório no Github** para compartilhar seu progresso~~; :paperclip: [**[Certificado]**](https://github.com/KevinyTeixeira/dio-desafio-github/blob/main/Certificados%20Bootcamp%20Eduzz%20Fullstack%20Developer/6.%20Criando%20seu%20Primeiro%20Reposit%C3%B3rio%20no%20Github%20para%20Compartilhar%20Seu%20Progresso.pdf)
- [x] ~~Introdução a criação de websites com **HTML5 e CSS3**~~; :file_folder: [[**Conteúdo**]](https://github.com/KevinyTeixeira/dio-desafio-github/blob/main/Introdu%C3%A7%C3%A3o%20a%20cria%C3%A7%C3%A3o%20de%20websites%20com%20HTML5%20e%20CSS3/Registros%20do%20Conte%C3%BAdo.md) | :paperclip: [**[Certificado]**](https://github.com/KevinyTeixeira/dio-desafio-github/blob/main/Certificados%20Bootcamp%20Eduzz%20Fullstack%20Developer/7.%20Introdu%C3%A7%C3%A3o%20a%20Cria%C3%A7%C3%A3o%20de%20Websites%20com%20HTML5%20e%20CSS3.pdf)
- [x] ~~**JavaScript ES6** essencial~~;  :file_folder: [[**Conteúdo**]](https://github.com/KevinyTeixeira/dio-desafio-github/blob/main/JavaScript%20ES6%20Essencial/Registros%20do%20Conte%C3%BAdo.md) | :paperclip: [**[Certificado]**](https://github.com/KevinyTeixeira/dio-desafio-github/blob/main/Certificados%20Bootcamp%20Eduzz%20Fullstack%20Developer/8.%20JavaScript%20ES6%20essencial.pdf)
- [x] ~~Desenvolvimento **avançado com JavaScript ES6**~~; :file_folder: [[**Conteúdo**]](https://github.com/KevinyTeixeira/dio-desafio-github/blob/main/JavaScript%20ES6%20Essencial/JavaScript%20ES6%20Avan%C3%A7ado.md) | :paperclip: [**[Certificado]**](https://github.com/KevinyTeixeira/dio-desafio-github/blob/main/Certificados%20Bootcamp%20Eduzz%20Fullstack%20Developer/9.%20Desenvolvimento%20Avan%C3%A7ado%20com%20JavaScript%20ES6.pdf)
- [x] ~~Introdução ao **TypeScript**: Explorando Classes, Tipos e Interfaces~~; :file_folder: [[**Conteúdo**]](https://github.com/KevinyTeixeira/dio-desafio-github/blob/main/TypeScript/Registros%20do%20Conte%C3%BAdo.md) | :paperclip: [**[Certificado]**](https://github.com/KevinyTeixeira/dio-desafio-github/blob/main/Certificados%20Bootcamp%20Eduzz%20Fullstack%20Developer/10.%20Introdu%C3%A7%C3%A3o%20ao%20TypeScript.pdf)
- [x] ~~Resolvendo Desafios de Código em JavaScript~~;
- [x] ~~Desafios iniciais em **JavaScript**~~;
- [x] ~~Criando seu jogo de memória estilo Genius~~; :file_folder: [[**Conteúdo**]](https://github.com/KevinyTeixeira/geniusproject-fromdio) | :paperclip: [**[Certificado]**](https://github.com/KevinyTeixeira/dio-desafio-github/blob/main/Certificados%20Bootcamp%20Eduzz%20Fullstack%20Developer/12.%20Criando%20seu%20jogo%20de%20mem%C3%B3ria%20estilo%20Genius.pdf) | :video_game: [[**Genius Game**]](https://kevinyteixeira.github.io/geniusproject-fromdio/)
- [ ] Introdução ao **ReactJS**; :file_folder: [[**Conteúdo**]](https://github.com/KevinyTeixeira/dio-desafio-github/blob/main/ReactsJs/Registros%20do%20Conte%C3%BAdo.md) | :paperclip: [**[Certificado]**]()
- [ ] Trabalhando com Componentes em React;
- [ ] Desenvolvimento de aplicações para internet com ReactJS;
- [ ] Práticas avançadas em projetos com ReactJS;
- [ ] Introdução aos **React Hooks**;
- [ ] Criando aplicações móveis multiplataforma com **React Native**;
- [ ] Desafios Básicos de JavaScript
- [ ] Criando um front-end totalmente componentizado na prática com ReactJS
- [ ] **MySql** - Trabalhando com as suas primeiras tabelas
- [ ] Introdução ao **MongoDB** e Banco de Dados **NoSQL**;
- [ ] Introdução ao **Node.js** com JavaScript;
- [ ] Explorando o Estilo Arquitetural **REST** com Node.js;
- [ ] Node.js com Banco de Dados Relacionais (SQL);
- [ ] Microsserviços e Integrações com Node.js;
- [ ] Desafios Médios em JavaScript;
- [ ] Construindo Encurtador de URL;
- [ ] Fundamentos de Arquitetura de Sistemas;
- [ ] Introdução a orquestração de contêiners com **Docker**;
- [ ] Introdução prática a computação em nuvem usando **AWS**;
