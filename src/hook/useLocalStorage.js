import React, { useState } from 'react'
import ToDoListKey from '../ToDoListKey'

const useLocalStorage = () => {
  const [toDoList,setToDoList] = useState([])  // {registerDate, toDo, complete, completeDate}
  
  const loadToDoList = () => {
    try{      
      const localToDo = localStorage.getItem(ToDoListKey)
      if(localToDo === '') return

      const toDoObject = JSON.parse(localToDo).map((todo) => ({
        ...todo,
        registerDate : new Date(todo.registerDate),
        completeDate : (todo.completeDate !== 'not-complete') ? new Date(todo.completeDate) : 'not-complete'
      }))

      const resultList = checkToDoListValidation(toDoObject)
      setToDoList(resultList)
      return

    } catch(error){
      alert('오류로 인하여 이전에 저장한 ToDoList를 가져올 수 없습니다.')
      setToDoList([])
      return
    }
    
  }

  const checkToDoListValidation = (localToDo) => {
    let notToDo = false
    if(!Array.isArray(localToDo)) throw new Error()

    const verifiedToDoList = localToDo.filter((todo) => {
      if(typeof todo.registerDate === 'object' &&
        typeof todo.toDo === 'string' &&
        typeof todo.complete == 'boolean' &&
        (typeof todo.completeDate === 'string' || typeof todo.completeDate === 'object') ){
          return true
        }
        notToDo = true
        return false
    })
    
    if(notToDo === true) alert('오류로 인하여 일부 [할 일]은 가져올 수 없습니다.')
    return verifiedToDoList
  }

  const addToDoItem = (item) => {
    if(item.trim() === '') return
    if(checkDuplicateToDo(item)) return

    const newToDo = {
      registerDate : new Date(),
      toDo : item,
      complete : false,
      completeDate : 'not-complete'
    }
    
    const newList = [...toDoList,newToDo]
    setToDoList(newList)
    localStorage.setItem(ToDoListKey,JSON.stringify(newList))
  }
  
  const checkDuplicateToDo = (item) => {
    if(toDoList.some((toDo) => toDo.toDo === item)){
      alert("중복된 [할 일]이 있습니다.")
      return true
    }
    return false
  }
  
  const completeCheck = (toDo) =>{
    setToDoList((oldList) =>{ 
      const newList = oldList.map((old) => {
        if(old.registerDate === toDo.registerDate){
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
    })
  }

  const deleteToDoItem = (toDo) => {
    setToDoList((oldList) => {
      const newList = oldList.filter((old) => old.registerDate !== toDo.registerDate)
      localStorage.setItem(ToDoListKey,JSON.stringify(newList))
      return newList
    })
  }

  return {toDoList,setToDoList,loadToDoList,addToDoItem,completeCheck,deleteToDoItem}
}

export default useLocalStorage