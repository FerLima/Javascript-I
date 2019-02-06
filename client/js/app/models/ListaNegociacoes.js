class ListaNegociacoes 
{
    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        // para blindar minha classe e não alterar por força
        let negociacao = []
        return  negociacao.concat(this._negociacoes);
    }
}