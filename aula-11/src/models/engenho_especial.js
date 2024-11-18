const { Engenho } = require ('./engenho');

class EngenhoEspecial extends Engenho {
    #tipoFarinha;

    constructor (nome, capacidadeMaxima, tipoFarinha){
        super (nome, capacidadeMaxima)
        this.#tipoFarinha = tipoFarinha; 
        Object.freeze(this);
        
    }
    get getTipoFarinha(){
        return this.#tipoFarinha
    }
    set setTipoFarinha(tipoFarinha){
        this.#tipoFarinha = tipoFarinha
    }

    gerarRelatorio(){
        try {
            console.log(`Nome: ${this.getNome}, Capacidade maxima: ${this.getCapacidadeMaxima}, Tipo de Farinha: ${this.#tipoFarinha}`)
            this.getRegistroDeProducao.forEach(registro => {
                console.log(registro)
            })
        } catch (error) {
            console.error("Não foi possivel gerar relatório!", error.message);
        }
    }
}


module.export = {EngenhoEspecial}