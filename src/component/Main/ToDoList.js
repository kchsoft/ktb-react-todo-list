import React, { useContext } from 'react'
import ToDoItem from './ToDoItem'
import styles from '../../css/Main/ToDoList.module.css'
import {ToDoListContext} from '../../context/ToDoListContext'

const ToDoList = () => {
  const {toDoList} = useContext(ToDoListContext)

  return (
    <section className={styles['todo-list']}>
      {toDoList.map(toDo => {
          console.log(toDo.registerDate)
          return <ToDoItem key={toDo.registerDate} toDo={toDo} />
        })
      }  
    </section>
    
  )
}

export default ToDoList