import React, { createContext } from 'react'
import useLocalStorage from '../hook/useLocalStorage'

const ToDoListContext = createContext(null)

const ToDoListContextProvider = ({children}) => {
  const {toDoList,setToDoList,loadToDoList,addToDoItem,completeCheck,deleteToDoItem} = useLocalStorage()

  return (
    <ToDoListContext.Provider value = {{toDoList,setToDoList,loadToDoList,addToDoItem,completeCheck,deleteToDoItem}}>
      {children}
    </ToDoListContext.Provider>
  )
}

export {ToDoListContext,ToDoListContextProvider}