import React, { Component } from 'react';

class Ordenar extends Component{

  //creamos una funcion que espera un cambio en el input cantidad, cuando se de ese cambio lanza la
  // funcion ActualizarCantidad
  actualizarCantidad(evento){
    console.log(evento)
  }

  render(){
      return(
          <div>
            <br/>
            <label> Cantidad: </label>
            <input onChange={ this.actualizarCantidad.bind(this) } type="number" min="0" max="20" />

            <label className="EspacioPlatillo"> Precio: { this.props.precio }</label>
          </div>
      )
    }

}

export default Ordenar;
