/* Exemplo: */

/* Veja a seguinte função... */
function fn () {
	console.log(text);
	var text = 'Exemplo';
	console.log(text);
}

fn();

/* Perceba que a variável text só é declarada no meio da função, sendo que ela já é requisitada antes mesmo de ser declarada! A saída do código será a seguinte: 
- Undefined
- Exemplo

Na íntegra, é isso o que acontece: */

function fn () {
   	var text; /* A variável é "Içada" para ser declarada antes mesmo da execução; */
    
	console.log(text);
    text = 'Exemplo';
   	console.log(text);
}