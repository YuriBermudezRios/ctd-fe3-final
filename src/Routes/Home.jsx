import React from 'react'
import { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const contextGlobal = useContext(ContextGlobal)
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {contextGlobal.datos.repoData ? contextGlobal.datos.repoData.map((dato) => (
          <Card key={dato.id} name={dato.name} username={dato.username} id={dato.id}></Card>
        )) : ""}
      </div>
    </main>
  )
}

export default Home