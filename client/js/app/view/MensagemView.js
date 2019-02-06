class MensagemView extends View{
    /*constructor(nome, funcionario) {
        Caso o construtor de view tivesse menos parametros que a de mensagem, mensagem tivesse algo a mais
        super(nome); // cuidado, tem que ser a primeira instrução!
        this._funcionario = funcionario;
    }
    */
    constructor (elemento) {
        super(elemento);
    }
    _template(model) {
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;
    }
}