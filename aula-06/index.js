const { Animal } = require('./Animal')
const { Mamifero } = require('./Mamifero')
const { Ave } = require('./Ave')


let a1 = new Animal('Steve', '10');
let m1 = new Mamifero ('Steve', 'Husky')
let ave = new Ave('Passarinho', '5',)


a1.getInfo()
a1.emitirSom();
m1.getInfo();
m1.emitirSom();
ave.getInfo();
ave.emitirSom();
