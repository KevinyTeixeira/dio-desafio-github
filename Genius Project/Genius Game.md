# :books: Genius Game Project

Para fazer esse jogo, a Digital Innovation One - DIO ensinou uma forma simplificada de criá-lo. Entretanto, como meu objetivo é aprender ao máximo, fiz diversas outras pesquisas e segui formas diferentes de desenvolvê-lo.

Neste momento em que escrevo esse tipo de "relatório", eu já terminei o jogo. Agora, pretendo registrar aqui pontos importantes para retornar a esse projeto futuramente, e talvez implementar uma funcionalidade para possibilitar um jogador contra o outro!



## :video_game: > 0. O Jogo

 Não quer perder tempo e deseja conferir logo o resultado final? [Clique aqui!]()



## :bookmark_tabs: > 1. Fontes

Abaixo, estão listadas algumas das minhas `fontes de pesquisa`, `assets` e `conhecimento` que utilizei nesse projeto:

- `Estrutura, código, organização, indentação e game base` de [Inkasa Dev - YOUTUBE](https://www.youtube.com/watch?v=iPI-exnefBo&ab_channel=InkasaDev);

- `Partículas Background.js` de [FIAP](https://on.fiap.com.br/index.php);
- `Animações do CSS` de [Animista](https://animista.net/play/text/tracking-in/tracking-in-contract-bck);



## :bar_chart: > 2. Arquivos SRC (Source Code)

Ou claro, mais conhecido como código fonte, vou pontuar aqui informações sobre cada um dos tipos de arquivos, ou seja, `HTML`, `CSS` e `JavaScript`.

### 2.1 Index.html

Neste arquivo, você poderá conferir as seguintes linhas de código na `<head>`:

```html
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="shortcut icon" type="image/jpg" href="../favicon.ico"/>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous">
	<link rel="stylesheet" href="style.css">
	<script type="module" src="script.js"></script>
	<style> /* Estamos importando uma fonte Google */
		@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Oswald&family=Share+Tech&display=swap');
	</style> 
	<title>Genius Game</title>
</head>
```

​	A primeira coisa que quero destacar, é a **meta tag `viewport`**, eu a descobri enquanto reparava nas configurações utilizadas pelo **Inkasa Dev** em seu documento html. Essa tag foi introduzida pela Apple, que desde então tem sido adotada por mais desenvolvedores e é responsável por garantir mais responsividade as aplicações. Ela funciona da seguinte forma:

```html
<!-- 1. A TAG "viewport" -->

<!-- Estrutura Padrão: "content", é que lhe permite entrar com uma série de valores separados por vírgula para garantir o comportamento adequado.  -->
<meta name="viewport" content="">

<!-- Você está definindo um layout de 320px -->
<meta name="viewport" content="width=320"> 
<!-- Para Layouts flexíveis, você define que a largura do viewport será baseada na largura do dispositivo -->
<meta name="viewport" content="width=device-width">
<!-- Para se certificar que o seu layout será mostrado como você planejou, você pode definir o nível de zoom inicial -->
<meta name="viewport" content="initial-scale=1">
<!-- Você ainda pode ir mais longe evitar que o usuário seja capaz de dar zoom -->
<meta name="viewport" content="maximum-scale=1">

<!-- CENÁRIO... perfeito?! -->
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- 
	A essa altura você já deve ter reparado que chegamos ao resultado do nosso jogo... entretanto, HÁ PROBLEMAS! Para mais confira aqui https://webdesign.tutsplus.com/pt/articles/quick-tip-dont-forget-the-viewport-meta-tag--webdesign-5972;
-->
```

​	Outro ponto de destaque, vai para a importação do **normalize.css**, que padroniza e fornece consistência a todos os elementos da aplicação nos mais diversos navegadores.

```html
<!-- 2. O Normalize.css -->

<!-- Basta você importar o normalize, antes mesmo de incluir o seu próprio estilo! -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
```

