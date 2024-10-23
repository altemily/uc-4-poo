
class Jogo{
    titulo;
    genero;
    anoDeLancamento;

    constructor(titulo, genero, anoDeLancamento){
        this.titulo = titulo;
        this.genero = genero;
        this.anoDeLancamento = anoDeLancamento;
    }
    getTitulo(){
        return this.titulo;
    }
    getGenero(){
        return this.genero;
    }
    getAnoDeLancamento(){
        return this.anoDeLancamento;
    }

    exibirDados(){
        console.log(
            `
            Catálogo de Jogos \n

            Título: ${this.titulo}
            Gênero: ${this.genero}
            Ano de Lançamento: ${this.anoDeLancamento}
            `
        )
    }
}

let jogo01 = new Jogo ("Forza Horizon", "Corrida", "2012");
// console.log(jogo01);
let jogo02 = new Jogo ("Forza Horizon 2", "Corrida", "2014");
// console.log(jogo02);
let jogo03 = new Jogo ("Forza Horizon 3", "Corrida", "2016");
// console.log(jogo03)

console.log(jogo01.getTitulo());
jogo01.exibirDados();
console.log(jogo02.getTitulo());
jogo02.exibirDados();
console.log(jogo03.getTitulo());
jogo03.exibirDados();