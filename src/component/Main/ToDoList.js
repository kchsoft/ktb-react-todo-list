import React from 'react'
import ToDoItem from './ToDoItem'
import styles from '../../css/Main/ToDoList.module.css'

const ToDoList = ({toDoList,setToDoList}) => {
  return (
    <section className={styles['todo-list']}>
      {toDoList.map(toDo => {
          return <ToDoItem key={toDo.registerDate} toDo={toDo} setToDoList={setToDoList}/>
        })
      }  
    </section>
    
  )
}

export default ToDoList