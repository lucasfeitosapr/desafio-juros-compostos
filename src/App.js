import React, { Component } from 'react';
import css from './app.module.css'
import juros from './juroscalc'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      montante: 1000,
      taxa: 0.5,
      mes: 3
    }
  }

  handleChange = (event) => {
    console.log(event.target)
    if(event.target.name === 'montante-inicial') {
      this.setState({
        montante: +event.target.value
      })
    } else if (event.target.name === 'juros') {
      this.setState({
        taxa: +event.target.value
      })
    } else {
      this.setState({
        mes: +event.target.value
      })
    }
    

    
  }

  render() {
    const { montante, taxa, mes } = this.state;
    console.log(juros.calcJuros(montante, taxa, mes))
    const { montanteByMonth } = juros.calcJuros(montante, taxa, mes)
    console.log(montanteByMonth)
    return (
      <div className={css.boxes}>
        <div className={css.inputs}>
          <span>Montante Inicial: </span>
          <input placeholder='Montante Inicial' type='number'name='montante-inicial' onChange={this.handleChange} value={montante}/>
        </div>
        <div className={css.inputs}>
          <span>Taxa de juros Mensal:</span>
          <input placeholder='Taxa de Juros' type='number' name='juros' onChange={this.handleChange} value={taxa}/>
        </div>
        <div className={css.inputs}>
          <span>Meses:</span>
          <input placeholder='Meses' name='meses' type='number' onChange={this.handleChange} value={mes}/>
        </div>
        <div className={css.break}></div>
        
            {juros.calcJuros(montante, taxa, mes).map(mes => {
              return (
                <div key={mes.mes} className={css.cards}>
                  <ul>
                    <li >{mes.mes}</li>
                    <li >R${mes.total}</li>
                    <li >R${mes.rendimento}</li>
                    <li >{mes.porcentagem}%</li>
                  </ul>
                </div>
              )
            })}
            {/* {total.map(montante => {
              return <li key={montante}>R${montante}</li>
            })}
            {rendimento.map(rend => {
              return <li key={rend}>R${rend}</li>
            })} */}

          {/* <li name='mes'  >1 </li>
            <li name='total'  >R${total} </li>
            <li  name='rendimento' >R${rendimento}</li>
            <li name='porcentagem'>{porcentagem}</li> */}
          
        
        
      </div>
    );
  }
}
