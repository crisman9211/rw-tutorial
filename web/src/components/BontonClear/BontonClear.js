import './BotonClear.css'
const BontonClear = ({ handlerClear, children }) => {
  return (
    <button className="boton-clear" onClick={handlerClear}>
      {children}
    </button>
  )
}

export default BontonClear
