/*
Aplique o Factory Method para fabricar computadores, usando como base o exemplo visto de static e parametrizado no hipertexto.
considere que:

- os produtos devem implementar uma interface comum;
- o cliente deve utilizar apenas a fábrica para criar instâncias do tipo abstrato da interface;
- todo computador deve ter, com getters, os atributos: ram, hd
, cpu e type;
- há dois tipos de computadores: pc e server;
- RAM e HD devem estar em GB;
- CPU deve estar em GHz;
- através do tipo informado, a fábrica decide qual tipo de computador irá instanciar;
- quando o método .toString() for aplicado a um computador, ele deve imprimir seus atributos.*/


/*Criando classe abstrata Produto que irá englobar classes concretas PC e Server*/

export abstract class Produto{
    private _tipo: any;

}

abstract class produto{
    protected _hd: number;
    protected _ram: number;
    protected _cpu: number;
    protected _tipo: Boolean;

    constructor(ram: number, hd: number, cpu: number, tipo: Boolean){
        this._ram = ram;
        this._hd = hd;
        this._cpu = cpu;
        this._tipo = true;


    }
    public abstract get ram() : void;
    public abstract get cpu() : void;
    public abstract get hd() : void;
    public abstract get tipo() : void;
    public abstract get toString() : void;

}


