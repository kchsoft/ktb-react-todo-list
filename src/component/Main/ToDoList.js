import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({toDoList}) => {
  return (
    <section className='todolist'>
      <div className="need to set table">
        {toDoList.map(toDo => {
            return <ToDoItem key={toDo.registerDate} toDo={toDo}/>
          })
        }  
      </div>
    </section>
    
  )
}

export default ToDoList