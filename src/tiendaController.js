//creamos un controlador observable con el contenido de los platos
import { extendObservable } from 'mobx';

class TiendaController {
  constructor(){
    // creamos un array de objetos que va contener los platos
    extendObservable(this,
      {
        platillos: [
          {
            nombre: 'nombrePlatillo',
            descripcion: "platillo muy rico",
            precio: 100,
            cantidad: 0},
          {
            nombre: 'nombrePlatillo',
            descripcion: "platillo muy rico",
            precio: 100,
            cantidad: 0
          },
          {
            nombre: 'nombrePlatillo',
            descripcion: "platillo muy rico",
            precio: 100,
            cantidad: 0
          }
        ]
      }
    );
  }
}

var VarTiendaController = new TiendaController;

export default VarTiendaController;
