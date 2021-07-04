//Se não, mostramos todos os livros em ordem cresente de quantidade de páginas

const livros = require('./database'); //importação

const readline = require('readline-sync');

const entradaInicial = readline.question('Deseja buscar um livro por categoria? S/N ')//pegar o input do user perguntando se ela deseja escolher o livro por categoria
if (entradaInicial.toLocaleUpperCase() === 'S') {//Se for sim, mostramos as categorias disponíveis e perguntamos qual categoria deseja
    console.log('Essas são as categorias disponiveis: ');
    console.log('Produtividade', '/Historia Brasileira', '/Americas', '/Tecnologia', '/Estilo de vida');

    const entradaCategoria = readline.question('Qual categoria você escolhe: ');

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria); // retorna o livro igual a categoria que a pessoa informal em entradaCategoria

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas); //ordenar em crescente
    console.log('Essas são todos os livros disponiveis: ');
    console.table(livrosOrdenados);
};