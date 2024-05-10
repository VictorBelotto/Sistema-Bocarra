import React from "react";

export const TorreContext = React.createContext();

export const TorreContextProvider = ({children}) =>{
  const [inputValues, setInputValues] = React.useState({
    passo: 0.5,
  })
  const [checks, setChecks] = React.useState({
    passoCheck: false,
    comprimentoCheck: false
  })

  const adicionarValueTorre = (id, value) =>{
    setInputValues(prevState => ({
      ...prevState,
      [id]: value,
    })
    )
  }
  const adicionarCheck = (id, value) =>{
    setChecks(prevState => ({
      ...prevState,
      [id]: value,
    })
    )
  }

  

  return(
    <TorreContext.Provider value={{inputValues, adicionarValueTorre, adicionarCheck, checks}}>
      {children}
    </TorreContext.Provider>
  )
}
