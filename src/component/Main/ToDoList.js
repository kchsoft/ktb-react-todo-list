import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({toDoList,setToDoList}) => {
  return (
    <section className='todo-list'>
      <div className="need to set table">
        {toDoList.map(toDo => {
            return <ToDoItem key={toDo.registerDate} toDo={toDo} setToDoList={setToDoList}/>
          })
        }  
      </div>
    </section>
    
  )
}

export default ToDoList