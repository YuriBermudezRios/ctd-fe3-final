import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [correct, setCorrect] = useState(false)
  const [contacto, setContacto] = useState("")

  const validarForm = (nombre, email) => {
    if(nombre.length>=5 && email.search("@")!==-1 && email.search(".com")!==-1){
      setCorrect(true)
      setContacto(nombre)
    } else {
      setCorrect(false)
      alert("Por favor verifique su información nuevamente")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    validarForm(e.target.nombre.value, e.target.correo.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" />
        <label htmlFor="correo">Correo</label>
        <input type="email" name="correo" id="correo" />
        <button type="submit">Contactar</button>
      </form>
      <div>
        {correct ? <h3>Gracias {contacto}, te contactaremos cuanto antes vía mail</h3> : ""}
      </div>
    </div>
  );
};

export default Form;
