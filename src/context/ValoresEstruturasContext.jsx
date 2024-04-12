import React from "react";

const ValoresEstruturasContext = React.createContext();

const ValoresEstruturasStorage = ({children}) => {
  const [valoresDigitados, setValoresDigitados] = React.useState({})

  
  return (
    <ValoresEstruturasContext.Provider>
      {children}
    </ValoresEstruturasContext.Provider>
  )
}