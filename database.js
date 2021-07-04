const livros = [ //criei um objeto com arrays
    {
        id: 1,
        nome: "Digital Minimalism",
        autor: "Cal Newport",
        categoria: "Produtividade",
        paginas: 254,
        recomenda: false,
        leu: false
    },
    {
        id: 2,
        nome: "O genocidio do negro brasileiro",
        autor: "Abdias do Nascimento",
        categoria: "Historia Brasileira",
        paginas: 254,
        recomenda: false,
        leu: false
    },
    {
        id: 3,
        nome: "As veias abertas da américa latina",
        autor: "Eduardo Galeano",
        categoria: "Americas",
        paginas: 400,
        recomenda: true,
        leu: true
    },
    {
        id: 4,
        nome: "Algoritimos para viver",
        autor: "Brian Christian",
        categoria: "Tecnologia",
        paginas: 412,
        recomenda: true,
        leu: true
    },
    {
        id: 5,
        nome: "Thinking, fast and slow",
        autor: "Daniel Kahneman",
        categoria: "Estilo de vida",
        paginas: 418,
        recomenda: true,
        leu: true
    },
    {
        id: 6,
        nome: "Padrões Javascript",
        autor: "Stoyan Stefanov",
        categoria: "Tecnologia",
        paginas: 231,
        recomenda: true,
        leu: true
    }
]

module.exports = livros;

//usa o comando npm init -y pra criar o package.json