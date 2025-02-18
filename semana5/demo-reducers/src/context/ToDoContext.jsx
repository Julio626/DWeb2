import React, { createContext, useReducer } from 'react'
import { initialState, toDoReducer } from '../reducers/toDoReducer'

export const ToDoStateContext = createContext()
export const ToDoDispatchContext = createContext()

export const ToDoContext = ({children}) => {
    const [state, dispatch] = useReducer(toDoReducer, initialState)

    

  return (
    <ToDoStateContext.Provider value={state}>
        <ToDoDispatchContext.Provider value={dispatch}>
            {children}
        </ToDoDispatchContext.Provider>
    </ToDoStateContext.Provider>
  )
}
