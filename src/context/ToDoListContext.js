import React, { createContext, useState } from 'react'

const ToDoListContext = createContext(null)

const ToDoListContextProvider = ({children}) => {
  const [toDoList,setToDoList] = useState([]) // {registerDate, toDo, complete, completeDate}

  return (
    <ToDoListContext.Provider value = {{toDoList,setToDoList}}>
      {children}
    </ToDoListContext.Provider>
  )
}

export {ToDoListContext,ToDoListContextProvider}