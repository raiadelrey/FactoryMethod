import  { Produto } from "./produto";

export class Produto2 extends Produto {
    _tipo: boolean;
    
    constructor(_ram: number, _hd: number, _cpu: number, _tipo: Boolean){
        super();
        this._tipo = true;
        

        
        

       
}

get cpu() : void {
    return console.log('CPU:', this.cpu, 'GHz');
}
get ram() : void {
   return console.log('RAM:', this.ram, ' GB ');
}

get hd() : void {
     return console.log('HDD:', this.hd,'GB')
}
get tipo() : void {
    
     if (this._tipo == false);
      return console.log('PC')

    function _tipo() {
        ;
    }
}


}

 toString(); void {
    
}
