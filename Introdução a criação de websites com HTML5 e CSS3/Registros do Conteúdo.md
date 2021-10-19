# :books:Introdução à criação de websites com HTML5 e CSS3



Aqui registrarei todos os conteúdos que eu considerar importante nessa disciplina, algo como um bloco de *"Anotações"* para que eu possa retornar futuramente caso considere necessário.



## :bookmark_tabs: Estrutura Básica do HTML5

Antigamente era preciso utilizar vários elementos (também chamada de tags) `<div>` com atributos como <`div class="o que seria isso?!">` para tentar ser o mais organizado possível, mas agora com o HTML5, foram introduzidos novos elementos para facilitar a organização da página. São eles:

#### Básicos:

- `<!DOCTYPE html>` não é um elemento HTML, mas indica para o navegador o que ele está interpretando;

- `<html></html>` meio óbvio, mas o principal elemento de um arquivo html, é o fato de que todo o código deve estar dentro dos elementos html;

- `<head></head>` dentro do head, vamos ter algumas "meta informações", informações que o navegador necessita, ou um buscador. Um exemplo é a `<meta>`, que pode ser usado para várias coisas, uma delas é a definição do "charset", que diz como o navegador deve interpretar os caracteres do site, ou a tag `<title>` que configura o nome da página.

- `<body></body>` meio óbvio, mas o principal elemento de um arquivo html, é o fato de que todo o código deve estar dentro dos elementos html;

  

  **A estrutura básica seria conforme abaixo :point_down: (clique para expandir):**

  ```html
  <!DOCTYPE html>
  <html>
  	<head>
      	<meta charset="utf-8">
      	<title>"Título da minha página!"</title>
      </head>
      <body>
      </body>
  </html>
  ```


#### Introduzidos no HTML 5:

![img](http://www.macoratti.net/Cursos/html5/html5_62.gif)

- O `<header>` representa um **cabeçalho da página, ou até parte de um cabeçalho**;
- O `<section>` representa uma **sessão genérica de conteúdo, como uma lista de artigos**;
- O `<article>` representa um **conteúdo relevante dentro da página, como um conteúdo de um blog**;
- O `<aside>` representa um **conteúdo que é relacionado ao conteúdo da página**, como por exemplo uma biografia de um autor, links relacionados, normalmente representado por uma barra lateral;
- O `<footer>` representa um **"rodapé" de uma section**;
- O `<nav>` representa um **conjunto de links que formam a navegação**;



**Atualizando nossa estrutura... vejamos abaixo  :point_down: (clique para expandir):**

```html
<!DOCTYPE html>
<html>
	<head>
    	<meta charset="utf-8">
    	<title>"Título da minha página!"</title>
    </head>
    <body>
        <header>
        	<h1>"Título desta header"</h1>
        </header>
        <section>
			<header>
                <h2>"Título desta seção </h2>
            </header>
            <article>
				<header>
					<h3>"Título deste article"</h3>
				</header>
            </article>
        </section>
        <footer></footer>
    </body>
</html>
```


#### :bookmark_tabs: Tags úteis (HTML)

Não vou abordar aqui as tags básicas, somente parâmetros ou atributos que realmente considero importante registrar.

##### Relacionado aos links (TAG `<a></a>`):

- `<a target="_blank">Link</a>` - Esse atributo faz com que os links sejam abertos em uma **"nova aba"**;
- `<a href=mailto:"exemplo@gmail.com">Link</a>` - O parâmetro **"mailto"** utilizado no atributo href faz com que o dispositivo acione o aplicativo padrão de e-mails para enviar um e-mail ao endereço mencionado;

##### Relacionado as imagens (TAG `<img>`):

- `<img alt="Descrição da Imagem">` - Esse atributo faz com que, caso o navegador **não consiga carregar a imagem, ele apresente a descrição indicada**;

##### Relacionado as listas:

- `<ul></ul>` - Lista simples, basicamente organiza os **itens linha a linha, sem ordená-los com números**;
- `<ol></ol>` - Lista ordenada, organiza os **itens linha a linha, mas numerando-os com "1.", "2."** e assim sucessivamente;
- `<li></li>` - É o **"item"** da lista `<ul>` ou `<ol>`;



## :bookmark_tabs: CSS 3

O CSS permite modificar esteticamente uma página HTML, de forma muito mais ampla e prática do que poderia ser feito de forma direta no HTML.

Para incluir o CSS em um documento html, é utilizado `<link rel="stylesheet" href="nome_do_arquivo.css">` dentro da tag `<head>`.

#### Estrutura básica de um arquivo CSS:

<img src="https://pensandonaweb.com.br/content/images/2014/Aug/css-rule-structure.png" alt="Representação visual de uma regra CSS" style="zoom: 50%;" />

- **SELETOR:** são as tags, ou conjunto de tags que serão afetadas pelas declarações inseridas dentro das chaves {};
- **DECLARAÇÃO:** tudo o que estiver dentro das chaves {}, e são compostos basicamente, por **propriedades** *(color, font-size, text-align)* e **valores** *(#333, 12px, center)*;

* Neste exemplo, estamos configurando as tags `<h1></h1>` para terem um tamanho de **fonte de 12 px, cor hexadecimal #333 e alinhado ao centro**;



##### **Entendi que o(s) seletor(es) determinam quais partes serão alteradas, mas como faz quando há por exemplo, mais de um `<header>` na página, e eu quero que ambos os header's sejam diferentes uns dos outros?**

​	É aí que entra os atributos `<id>` e `<class>`,  são formas de identificar uma tag específica do html para alterar conforme desejar. 



##### :earth_africa: Diferenças entre `<id>` e `<class>`:

É importante destacar as diferenças, pois são importantes para aqueles que não estão abtuados.

1. No HTML, as diferenças de escritas são óbvias, um se escreve `<class>` e o outro `<id>`, enquanto que no CSS, a `<class>` deve ser precedida por **"."**, e a `<id>` precedida por um **"#"**;
2. A `<id>` é única e exclusiva, portanto **não pode ter seu valor repetido**. Em contra partida a `<class>` pode ser **repetida quantas vezes desejar**.

Exemplo de utilização dos atributos `<id>` e `<class>`:

```html
<!DOCTYPE html>
<html>
	<head>
    	<meta charset="utf-8">
    	<title>Título da minha página!</title>
        <link rel="stylesheet" href="style.css"> 
		<!-- aplica o arquivo CSS na página! -->
    </head>
    <body>
        <header>
        	<h1 id="title">Título desta header</h1>
        </header>
        <section>
			<header>
                <h2 class="subtitle">Título desta seção</h2>
            </header>
            <article>
				<header>
					<h3 class="postitle">Título deste article</h3>
				</header>
            </article>
        </section>
        <footer></footer>
    </body>
</html>
```


```css
body {
	background-color: #ccc;
	text-align: center;
}

#title, .subtitle, .postitle {
	color: blue;
}

.title {
	font-style: italic;
}

.subtitle {
	font-style: Times New Roman;
}

.postitle {
	font-style: calibri;
}

/*
Ou você poderia ainda:

.principal, #secundaria, #terciaria {
	font-size: 12px;
	color: gray (ou hexadecimal #333);
	font-style: calibri;
}

*/
```



#### :tv: Box Model

A denominada *"Box Model"*, se refere ao layout de uma página. Todas as páginas webs podem ser divididas da seguinte forma:

<img src="https://www.lilengine.co/sites/default/files/inline-images/Screen%20Shot%202019-04-14%20at%2023.59.07.png" alt="CSS Box-model" style="zoom:20%;" />

- **MARGIN**: ou "margem", são os espaçamentos entre os elementos;
- **BORDER**: ou "borda", circundam o padding e o conteúdo nos permitindo alterar sua aparência, como por exemplo largura e cor;
- **PADDING**: é um espaçamento entra a borda e o content;
- **CONTENT**: ou "conteúdo";

Para visualizar exatamente o que está sendo falado aqui, e seguindo os códigos HTML aqui já listados, esse código de CSS aplica os elementos supracitados:

```css
body {
	background-color: #ccc;
}

#title, .subtitle, .postitle {
	color: blue;
}

.subtitle {
	font-size: 16px;
	font-style: italic;
}

.postitle {
background-color: #FFFF;
/* teste cada um de forma individual, ativando e desativando livremente para enxergar as diferenças! */
padding: 10px; 
border: 3px solid #000;
margin: 10px;
}

/*
Ou você poderia ainda:

#title, .subtitle, .postitle {
font-size: 12px;
color: gray (ou hexadecimal #333);
font-style: calibri;
}

*/
```

Para ver a distribuição deste **BOX MODEL**, abra-o no *Google Chrome* e em seguida inspecione a página. É isso que você encontrará: 

![image-20211018101322538](C:\Users\05725843181\AppData\Roaming\Typora\typora-user-images\image-20211018101322538.png)

![image-20211018100854938](C:\Users\05725843181\AppData\Roaming\Typora\typora-user-images\image-20211018100854938.png)![image-20211018101228321](C:\Users\05725843181\AppData\Roaming\Typora\typora-user-images\image-20211018101228321.png)

![image-20211018100926156](C:\Users\05725843181\AppData\Roaming\Typora\typora-user-images\image-20211018100926156.png)![image-20211018101200464](C:\Users\05725843181\AppData\Roaming\Typora\typora-user-images\image-20211018101200464.png)

![image-20211018101037861](C:\Users\05725843181\AppData\Roaming\Typora\typora-user-images\image-20211018101037861.png)![image-20211018101051301](C:\Users\05725843181\AppData\Roaming\Typora\typora-user-images\image-20211018101051301.png)

![image-20211018101106062](C:\Users\05725843181\AppData\Roaming\Typora\typora-user-images\image-20211018101106062.png)![image-20211018101132839](C:\Users\05725843181\AppData\Roaming\Typora\typora-user-images\image-20211018101132839.png)



#### :label: **Comandos Úteis do CSS:**

Vou registar alguns comandos muito úteis para fazer TODA a diferença em um site.

- **MARGIN e PADDING**: essas estruturas podem ser configuradas separadamente, por exemplo, as medidas das margens não precisam ser uniforme. Você pode organizar isso usando as propriedades **top (:arrow_up:), bottom (:arrow_down:), left (:arrow_left:) e right (:arrow_right:)**; exemplos: `padding-bottom: 5 px`; `margin-top: 12px`;
- __*__: Sim, esse asterisco mesmo, com ele você aplica os parâmetros CSS a todo o HTML, pode ser útil para configurar o BOX MODEL como um todo;

```css
@charset "utf-8";
* {
	margin: 10px;
	padding: 5px;
}
```

- **Top, bottom, left e right:** essas propriedades podem também serem usadas de forma isoladas, as quais são traduzidas na página como a distância da extremidade da tela. Essa distância pode ser em **px**, ou em em **%**.

```css
.uma_Lista ul {
	top: 1%;
    left: 10 px;
}
```

- **FLOAT :** o `float` é um comando que permite a um elemento "sair" da camada principal de contexto de um navegador, sei que fica sem sentido dizer contexto, mas imagine uma imagem 3D, poisé, o `float` faz justamente com que o elemento em questão tenha prioridade na tela, colocando todo o resto na segunda camada de contexto. Alguns comandos que podem apoiar nos ajustes com o `float` são: `overflow (hidden)`, que controla o "excedente" de tela e `clear (both, left, right)`, que controla se o elemento afetado deve ser posicionado abaixo de um elemento sob float; (para mais sobre isso, você pode assistir [esse vídeo](https://www.youtube.com/watch?v=E1tR7sYMEN0))

```css
.uma_Lista ul {
	float: left;
}

.uma_Lista2 ul {
	float: right;
}

.um_Texto p {
	clear: both; /* ambos os lados */
}
```

- **DISPLAY**: essa propriedade permite organizar um conjunto de elementos (**li's** de uma **ul**, por exemplo),  e pode ser declarada com 3 parâmetros:

  - `Display: inline;`- alinha os elementos numa mesma linha, separando-os por espaços. Um detalhe importante sobre os espaços, é que eles são provocados pelo "Enter" na linha de código, que o browser interpreta como um "Espaço", além disso é importante dizer também que essa propriedade faz com que os elementos **ignorem as dimensões *Width* e *Height*** declaradas; (Para mais sobre isso, você pode assistir [esse vídeo](https://www.youtube.com/watch?v=5PS6ku8NzIE))
  - `Display: block;` - alinha os elementos numa "coluna", ocupando uma linha inteira para cada um dos elementos. Diferentemente do `inline`, essa propriedade permite que você declare **Width** e **Height**;  (Para mais sobre isso, você pode assistir [esse vídeo](https://www.youtube.com/watch?v=HWfhwokS_qg))
  - `Display: inline-block;` - alinha os elementos numa mesma linha, separando-os por espaços, mas permitindo que você controle a **Width** e **Height**; (Para mais sobre isso, você pode assistir [esse vídeo](https://www.youtube.com/watch?v=Yj9-N9BEVeM))

- **BACKGROUND:** essa propriedade altera o fundo do elemento (ou conjunto de elementos), podendo ser um **gradiente**, uma **cor estática** ou uma **imagem**.

  ```css
  header {
  	
      /* Em todos os casos */
      background-position: center center; /* (Centralizada o fundo x,y) */
      border: 10px solid #6c5ce7; /* (Tamanho, Tipo, Cor) */
      border-radius: 50%; /* (Aplica um efeito radial na borda)
      
      /* Background-color */
      background-color: gray; /* (Expressão literal) */
      background-color: #808080; /* (Hexadecimal) */
      background-color: rgb(128,128,128); /* (Red, Green, Blue) */
      background-color: rgba(128,128,128,0); /* (Red, Green, Blue, Alpha) */
      
      /* Background-image */
      background-image: url(link); /* (Aplica uma imagem) */
      background-size: cover; /* (Ajusta altura/largura ao elemento) */
      background-repeat: non-repeat; /* (Não permite a repetição da imagem) */
          
      /* Background-image (Gradiente) */
      background-image: linear-gradient(green 50%, red 25%, blue 25%); /* (1st color, 2nd color, 3rd color, etc) */
      background-image: radial-gradient(green 50%, red 25%, blue 25%); /* (Radial) */
  	background-image: linear-gradient(to left, green 50%, red); /* (Direcionando à <-) */
      background-image: repeating-radial-gradient(black, white 10px); /* (Certo, agora você está sendo hipnotizado) */
      background-image: repeating-linear-gradient(45deg, black, white 10px); /* (Girou um pouco) */
      
      /* Background-image (IDEIA TOP) */
      background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../images/background.png') /* E assim você usa um .png, com gradiente ao fundo! */
  }
  ```

- :star: **Transições:** você pode definir uma "variante" estética para as regras do CSS, baseadas em "estado" de um objeto. A seguir, uma lista das **principais** "Transições" que você pode fazer para tornar a página mais "viva". A lista completa você pode encontrar [aqui](https://www.w3schools.com/css/css_pseudo_classes.asp).

  ```css
  /* CSS Pseudo Classes */
  #seletor:hover {} /* (Executa quando o mouse está sobre o elemento) */
  #seletor:focus {} /* (Executa quando a pessoa seleciona o elemento em questão) */
  #seletor:link {} /* (Executa enquanto um link ainda não foi visitado) */
  #seletor:visited {} /* (Executa após um link ter sido visitado) */
  #seletor:active {} /* (Executa quando a pessoa seleciona o elemento em questão) */
  
  /* CSS Pseudo Elementos */
  #seletor::after {} /* (Insere um conteúdo após a execução do seletor) */
  #seletor::before {} /* (Insere um conteúdo após a execução do seletor) */
  
  /* Propriedades para Transições */
  #seletor {
      transition-property: border-color; /* (Você precisa indicar qual propriedade será afetada pela transição, é possível aplicar uma mesma transição para todas as propriedades CSS do elemento, basta colocar o valor 'all') */
      transition-duration: 1s; /* (duração do efeito em segudos, o padrão é 0) */
      transition-timing-function: linear; /* (linear, ease, ease-in, ease-out, ease-in-out | se trata do rítmo da transição) */
      transition-timing-function: cubic-bezier(0.005, 0.625, 0.365, 0.0840); /* (é definindo uma função customizada, especificando quatro coordenadas para definir a cubic bezier curve) */
      transition-delay: 0.1s; /* (Define quanto tempo o efeito demora para iniciar) */
      ...
      
  }
  ```

