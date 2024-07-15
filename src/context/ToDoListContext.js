import React, { createContext, useReducer } from 'react'
import ToDoListKey from '../ToDoListKey'
import { checkDuplicateToDo, checkToDoListValidation } from '../component/Main/checkFtn/checkToDo'

const ToDoListContext = createContext(null)


const toDoReducer = (toDoList, action) => {
  let newList = null

  switch(action.type){
    case 'loadToDoList' :
      try{
        const localToDo = localStorage.getItem(ToDoListKey)
        if(localToDo === '') return
  
        const parseToDo = JSON.parse(localToDo).map((todo) => ({
          ...todo,
          registerDate : new Date(todo.registerDate),
          completeDate : (todo.completeDate !== 'not-complete') ? new Date(todo.completeDate) : 'not-complete'
        }))
  
        const verifiedToDoList = checkToDoListValidation(parseToDo)
        return verifiedToDoList
        
      } catch(error){
        alert('오류로 인하여 이전에 저장한 ToDoList를 가져올 수 없습니다.')
        return []
      }

    case 'addToDoItem' : 
      const item = action.payload
      if(item.trim() === '') return
      if(checkDuplicateToDo(toDoList,item)) return

      const newToDo = {
        registerDate : new Date(),
        toDo : item,
        complete : false,
        completeDate : 'not-complete'
      }
      
      newList = [...toDoList,newToDo]
      localStorage.setItem(ToDoListKey,JSON.stringify(newList))
      return newList

    case 'deleteToDoItem' : 
      newList = toDoList.filter((old) => old.registerDate !== action.payload.registerDate)
      localStorage.setItem(ToDoListKey,JSON.stringify(newList))
      return newList

    case 'checkComplete' :
      newList = toDoList.map((old) => {
        if(old.registerDate === action.payload.registerDate){
          return {
            ...old,
            complete : !old.complete,
            completeDate : (old.completeDate === 'not-complete') ? new Date() : 'not-complete'
          }
        }
        return old
      })
      localStorage.setItem(ToDoListKey,JSON.stringify(newList))
      return newList
    
    default :
      return
  }
}


const ToDoListContextProvider = ({children}) => {
  const [toDoList,dispatch] = useReducer(toDoReducer,[]) // {registerDate, toDo, complete, completeDate}

  const loadToDoList = () => {
    dispatch({type : 'loadToDoList'})
  }
  
  const addToDoItem = (toDoItem) => {
    dispatch({type : 'addToDoItem', payload : toDoItem})
  }

  const deleteToDoItem = (toDoItem) => {
    dispatch({type : 'deleteToDoItem', payload : toDoItem})
  }

  const checkComplete = (toDoItem) => {
    dispatch({type : 'checkComplete',payload : toDoItem})
  }

  return (
    <ToDoListContext.Provider value = {{toDoList,loadToDoList,addToDoItem,deleteToDoItem,checkComplete}}>
      {children}
    </ToDoListContext.Provider>
  )
}

export {ToDoListContext,ToDoListContextProvider}