const {} = require("prompt-sync")()
const {Engenho} = require('../models/engenho')
const {EngenhoEspecial} = require("../models/engenho_especial")


const engenho = new Engenho('joel', 50);
engenho.registrarProducao("27/10","10")

engenho.gerarRelatorio()

const engenhoEspecial = new EngenhoEspecial('joel', 10, 'mandioca');
engenhoEspecial.registrarProducao('28/10', '20');
engenhoEspecial.gerarRelatorio();