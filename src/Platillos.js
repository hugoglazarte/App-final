import React, { Component } from 'react';
import './Platillos.css';
import logo from './logo.svg';

//necesitamos la info de VarTiendaController
import VarTiendaController from './tiendaController';

class Platillos extends Component{
    render(){
      //creamos la var que va a contener los div con la data de platillos
      let platillos_div = [];

      // creamos una const que ejecuta un forEach y vuelca el contenido del
      // array de objetos en div dentro de platillos_div
      const llenar_array__platillos_div = VarTiendaController.platillos.forEach(
        (value, index) => (
          platillos_div.push(
              <div className="list-group-item" key={index}>
                <div className="panel-body">
                  <img role="presentation" src={ logo } className="ImagenPlatillo" />
                  <h2 className="TitlePlatillo">{ value.nombre }</h2>
                  <div className="DescripcionPlatillo">{ value.descripcion }</div>
                </div>
              </div>
          )
        )
      )

      return(
          <div className="container col-md-6">
            <div>
              <div className="panel panel-primary">
                <div className="list-group Platillo-Menu">

                  { platillos_div }

                </div>
              </div>
            </div>
          </div>
      );
    }
}

export default Platillos;
