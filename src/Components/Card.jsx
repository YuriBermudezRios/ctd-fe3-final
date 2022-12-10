import React from "react";
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import {Link} from "react-router-dom"


const Card = ({ name, username, id }) => {
  const {fav, setFav} = useContext(ContextGlobal)
  const verificarAdd = () => (
    fav.some((element) => element.id ===id)
  )

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    if(verificarAdd()){
      alert("Ya se ha agredado anteriormente a favoritos")
    } else {
      const newFav = [...fav]
      const newFavorito = {id,name,username}
      newFav.push(newFavorito)
      setFav(newFav)
    }
  }

  localStorage.setItem('fav',JSON.stringify(fav))

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={`/dentist/${id}`}>
          <img className="img-card" src="./images/doctor.jpg" alt="imagen-dentista" />
          <h2>{name}</h2>
          <h2>{username}</h2>
        </Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">{'⭐'}</button>
    </div>
  );
};

export default Card;
