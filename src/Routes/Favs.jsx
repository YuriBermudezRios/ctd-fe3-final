import React from "react";
import { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const datos = JSON.parse(localStorage.getItem('fav'))
  const contextGlobal = useContext(ContextGlobal)

  return (
    <div className={contextGlobal.theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {datos.map((dato) => (
          <Card key={dato.id} name={dato.name} username={dato.username} id={dato.id}></Card>
        ))}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </div>
  );
};

export default Favs;
