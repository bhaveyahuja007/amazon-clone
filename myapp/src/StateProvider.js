import React,{ createContext,useContext,useReducer } from 'react'


// Prepares the datalayer
export const StateContext = createContext()

// wrap our app and provode the data layer
export const StateProvider = ({reducer,initialState,children}) => {
  return(
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)}

// pull info from data layer
export const useStateValue = () => useContext(StateContext);