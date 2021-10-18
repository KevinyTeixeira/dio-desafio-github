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

.title, #subtitle, #postitle {
	color: blue;
}

.title {
font-style: italic;
}

#subtitle {
font-style: Times New Roman;
}

#postitle {
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
	background: #ccc;
}

#secundaria {
color: gray;
/* teste cada um de forma individual, ativando e desativando livremente para enxergar as diferenças! */
padding: 10px; 
border: 3px solid #000;
margin: 10px;
}
```





