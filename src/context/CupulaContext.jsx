import React from "react";

export const CupulaContext = React.createContext();

export const CupulaContextProvider = ({children}) =>{
  const [inputValues, setInputValues] = React.useState({})

  const adicionarValue = (id, value) =>{
    setInputValues(prevState => ({
      ...prevState,
      [id]: value,
    })
    )
  }

  return(
    <CupulaContext.Provider value={{inputValues, adicionarValue}}>
      {children}
    </CupulaContext.Provider>
  )
}
