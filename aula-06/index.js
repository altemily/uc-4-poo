const { Animal } = require('./Animal')
const { Mamifero } = require('./Mamifero')
const { Ave } = require('./Ave')


let a1 = new Animal();
let m1 = new Mamifero ()
let ave = new Ave()


a1.getInfo()
a1.emitirSom();
m1.getInfo();
m1.emitirSom();
ave.getInfo();
ave.emitirSom();
