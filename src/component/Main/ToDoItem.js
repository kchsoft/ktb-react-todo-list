import React, { useState } from 'react'
import ShowDate from './ToDoItem/ShowDate'
import DeleteBtn from './ToDoItem/DeleteBtn'

const ToDoItem = ({toDo,setToDoList}) => {

  const [isComplete, setIsComplete] = useState(toDo.complete)
  const completeCheck = () =>{
    setIsComplete(!isComplete)
    setToDoList((oldList) => 
      oldList.map((old) => {
        if(old.registerDate === toDo.registerDate){
          return {
            ...old,
            complete : !old.complete,
            completeDate : (old.completeDate === undefined) ? new Date() : undefined
          }
        }
        return old
      })
    )
  }

  return (
    <div className='todo-item'>
      <input type="checkbox" onChange={completeCheck} checked={toDo.complete}/>
      <p className={`todo ${isComplete ? 'line-through' : '' }`}>{toDo.toDo}</p>
      <ShowDate className='register-date' date={toDo.registerDate}/>
      <ShowDate className='complete-date' date={toDo.completeDate}/>
      <DeleteBtn toDo={toDo} setToDoList={setToDoList}/> 
    </div>
  )
}

export default ToDoItem