class NegociacaoController {


    constructor (){
      let $ = document.querySelector.bind(document);
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($("#negociacoesView"));
        this._negociacoesView.update(this._listaNegociacoes);
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($("#mensagemView"));
        this._mensagemView.update(this._mensagem);
        // melhora a performance
        
    }

    adiciona(event) {
        event.preventDefault();
        //date aceita um array com ano mes dia para ser transformado em data.
        this._listaNegociacoes.adiciona(this._criaNegociacao());

        this._mensagem.texto = 'Negociação adicionada com sucesso!'
        this._mensagemView.update(this._mensagem);
        this._negociacoesView.update(this._listaNegociacoes);
        this._limpaFormulario();


        //let diaMesAno = DateHelper.dataParaTexto(negociacao.data);

    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}
//metodo .reverce() inverte a array inteira, os ultimos serao os primeiros
//metodo .join(",") junta todas as posições do array na virgula;
// replace(/,/g,'-') troca todas as , da string pra um hifen;
// barras sao parametros da expressao regular e g é parametro pra global(string inteira)
// exemplo map = let novosNumeros = numero.map(function(item){ return item+10;});