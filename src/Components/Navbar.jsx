import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const contextGlobal = useContext(ContextGlobal)

  function changeTheme(){
    if(contextGlobal.theme==="dark"){
      contextGlobal.dispatchTheme({type: "light-theme"})
    } else {
      contextGlobal.dispatchTheme({type: "dark-theme"})
    }
  }

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to="/home">Home</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/favs">Favoritos</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={changeTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar