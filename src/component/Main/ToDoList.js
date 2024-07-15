import React, { useContext } from 'react'
import ToDoItem from './ToDoItem'
import styles from '../../css/Main/ToDoList.module.css'
import {ToDoListContext} from '../../context/ToDoListContext'

const ToDoList = () => {
  const {toDoList,setToDoList} = useContext(ToDoListContext)
  return (
    <section className={styles['todo-list']}>
      {toDoList.map(toDo => {
          console.log(toDo.registerDate)
          return <ToDoItem key={toDo.registerDate} toDo={toDo} setToDoList={setToDoList}/>
        })
      }  
    </section>
    
  )
}

export default ToDoList