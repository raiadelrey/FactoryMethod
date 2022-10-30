import { Produto } from "./produto";
import { Produto1 } from "./Produto1";
import { Produto2 } from "./Produto2";

export class Creator {

   public static createProduto(ram: number, hd: number, cpu: number, tipo: boolean) : Produto {        
      if (tipo == true) {
          return new Produto1(ram, hd, cpu, tipo);
      } else if (tipo == false) {
          return new Produto2(ram, hd, cpu, tipo);        
      }
  }
}
