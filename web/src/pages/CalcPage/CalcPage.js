import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'
import BontonClear from 'src/components/BontonClear/BontonClear'
import Boton from 'src/components/Boton/Boton'
import Pantalla from 'src/components/Pantalla/Pantalla'
import freeCodeCampLogo from 'src/images/freecodecamp-logo.png'
import { evaluate } from 'mathjs'

import './CalcPage.css'

const CalcPage = () => {
  const [input, setInput] = useState('')

  const agregarInput = (val) => {
    setInput(input + val)
  }

  const calcResult = () => {
    input ? setInput(evaluate(input)) : alert('Enter a value')
  }

  return (
    <>
      <MetaTags title="Calc" description="Calc page" />
      <div className="App">
        <div className="freecodecamp-logo-contenedor">
          <img
            src={freeCodeCampLogo}
            className="freecodecamp-logo"
            alt="Logo de freeCodeCamp"
          />
        </div>
        <div className="contenedor-calculadora">
          <Pantalla input={input} />
          <div className="fila">
            <Boton handlerClic={agregarInput}>1</Boton>
            <Boton handlerClic={agregarInput}>2</Boton>
            <Boton handlerClic={agregarInput}>3</Boton>
            <Boton handlerClic={agregarInput}>+</Boton>
          </div>
          <div className="fila">
            <Boton handlerClic={agregarInput}>4</Boton>
            <Boton handlerClic={agregarInput}>5</Boton>
            <Boton handlerClic={agregarInput}>6</Boton>
            <Boton handlerClic={agregarInput}>-</Boton>
          </div>
          <div className="fila">
            <Boton handlerClic={agregarInput}>7</Boton>
            <Boton handlerClic={agregarInput}>8</Boton>
            <Boton handlerClic={agregarInput}>9</Boton>
            <Boton handlerClic={agregarInput}>*</Boton>
          </div>
          <div className="fila">
            <Boton handlerClic={calcResult}>=</Boton>
            <Boton handlerClic={agregarInput}>0</Boton>
            <Boton handlerClic={agregarInput}>.</Boton>
            <Boton handlerClic={agregarInput}>/</Boton>
          </div>
          <div className="fila">
            <BontonClear handlerClear={() => setInput('')}>Clear</BontonClear>
          </div>
        </div>
      </div>
    </>
  )
}

export default CalcPage
