class Engenho {
    #nome;
    #capacidadeMaxima;
    #registroDeProducao;
    
    constructor (nome, capacidadeMaxima) {
        this.#nome = nome;
        this.#capacidadeMaxima = capacidadeMaxima;
        this.#registroDeProducao = [];
        

    }
    get getNome() {
        return this.#nome;
    }
    set setNome(nome){
        this.#nome = nome
    }
    get getCapacidadeMaxima(){
        return this.#capacidadeMaxima;
    }
    set setCapacidadeMaxima(capacidadeMaxima){
        this.#capacidadeMaxima = capacidadeMaxima;
    }
    get getRegistroDeProducao(){
        return this.#registroDeProducao;
    }

    registrarProducao(data,quantidade){
        try {
            const novaProducao = {
                data:data,
                quantidade: quantidade
            }

            this.#registroDeProducao.push(novaProducao);
        console.log(novaProducao)
              
        } catch (error) {
            console.error("Não foi possivel registrar produção!", error.message);
        }
    }
    gerarRelatorio(){
        try {
            console.log(`Nome: ${this.getNome}, Capacidade maxima: ${this.getCapacidadeMaxima}`)
            this.#registroDeProducao.forEach(registro => {
                console.log(registro)
            })
        } catch (error) {
            console.error("Não foi possivel gerar relatório!", error.message);
        }
    }
}

// teste

// const engenho = new Engenho('Gabriel', '10T');

// engenho.registrarProducao("27/10","10")

// engenho.gerarRelatorio()

module.exports = {Engenho}