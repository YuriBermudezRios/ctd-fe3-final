import { useReducer } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

function themeReducer(state, action){
  switch(action.type){
    case "dark-theme": {
      const newTheme = "dark"
      return newTheme
    }
    case "dark-light": {
      const newTheme = ""
      return newTheme
    }
    default: {
      throw new Error(`No se reconoce el type: ${action.type}`)
    }
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [repoData, setRepoData] = useState()
  const [fav, setFav] = useState([])
  const [theme, dispatchTheme] = useReducer(themeReducer,initialState.theme)

  useEffect(() => {
    async function getData(){
      try{
        const repo = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await repo.json()
        setRepoData(data)
      }
      catch(e){
        console.log(e)
      }
    }
    getData()
  },[])
  const datos = {
    repoData
  }

  return (
    <ContextGlobal.Provider value={{datos,fav,setFav,theme,dispatchTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};
