import './Boton.css'

const Boton = (props) => {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== '.' && valor !== '='
  }
  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? 'operador' : ''
      }`.trimEnd()}
      onClick={() => props.handlerClic(props.children)}
      role="button"
      tabIndex="0"
      onKeyPress={props.children}
    >
      {props.children}
    </div>
  )
}

export default Boton
