import  { Produto } from "./produto";
export class Produto1 extends Produto {
    

    constructor(_ram: number, _hdd: number, _cpu: number, _tipo: Boolean){
        
        super();
           
        

       
}

get cpu() : void {
    return console.log('CPU:', this.cpu, 'GHz');
}
get ram() : void {
   return console.log('RAM:', this.ram, ' GB ');
}

get hdd() : void {
     return console.log('HDD:', this.hdd,'GB')
}
get _tipo() : void {
    if (this._tipo == true);
      return console.log('PC')
}


}

 toString(); void {
    
}
