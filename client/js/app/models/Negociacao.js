class Negociacao {
    
    constructor(data, quantidade, valor) {

        
        this._data = new Date(data.getTime()); // blindagem de datas.
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze();
    }

    get volume() {

        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());//programação defensiva, fazer uma copia o torna nao alteravel;
    }

    get quantidade() {
        return this._quantidade
    }

    get valor() {
        return this._valor
    }
    


}

    
       
