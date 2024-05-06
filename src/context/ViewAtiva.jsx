import React from "react";

export const ViewAtivaContext = React.createContext()

export const ViewAtivaProvider = ({children}) =>{
  const [viewAtiva, setViewAtiva] = React.useState('')

  return(
    <ViewAtivaContext.Provider value={{viewAtiva, setViewAtiva}}>
      {children}
    </ViewAtivaContext.Provider>
  )

}