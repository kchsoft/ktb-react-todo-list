import { useEffect, useRef, useState } from "react";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import ToDoCategory from "./ToDoCategory";
import ToDoListKey from "../../ToDoListKey";
import styles from '../../css/Main/Main.module.css'

const Main = () => {
  const [toDoList, setToDoList] = useState([]) // {registerDate, toDo, complete, completeDate}
  const toDoRef = useRef()

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
    if(!Array.isArray(localToDo)) return false
    let notToDo = false

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

  useEffect(() => {
    loadToDoList()
  },[])

  return( 
  <main className={styles['main']}>
    <ToDoInput setToDoList={setToDoList} toDoList={toDoList} toDoRef={toDoRef}/>
    <ToDoCategory/>
    <ToDoList toDoList={toDoList} setToDoList={setToDoList}/>
  </main>
  )
};

export default Main;
