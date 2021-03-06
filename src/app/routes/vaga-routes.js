const VagaController = require('../controladores/vaga-controller');
const vagaController = new VagaController();
const Vaga = require('../models/vaga');

module.exports = (app) => {

    const rotasVaga = VagaController.rotas();

    app.get(rotasVaga.lista, vagaController.lista());

    app.route(rotasVaga.cadastro)
    .get(vagaController.formularioCadastro())
    .put(vagaController.edita())
    .post(Vaga.validation(),vagaController.cadastra());

    app.get(rotasVaga.edicao, vagaController.formularioEdicao());

    app.delete(rotasVaga.delecao, vagaController.remove());
    
    //ERRO 1 - TRATAR
    app.get(rotasVaga.visualizaVaga, vagaController.visualizaVaga());

}
        
