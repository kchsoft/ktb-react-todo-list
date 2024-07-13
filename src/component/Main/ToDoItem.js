import React, { useState } from 'react'
import ShowDate from './ToDoItem/ShowDate'
import DeleteBtn from './ToDoItem/DeleteBtn'
import ToDoItemStyles from '../../css/Main/ToDoItem/ToDoItem.module.css'
import DateStyles from '../../css/Main/ToDoItem/ShowDate.module.css'


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
    <div className={ToDoItemStyles['todo-item']}>
      <input className={ToDoItemStyles['complete-box']} type="checkbox" onChange={completeCheck} checked={toDo.complete}/>
      <p className={`${ToDoItemStyles['todo']} ${isComplete ? ToDoItemStyles['line-through'] : '' }`}>{toDo.toDo}</p>
      <ShowDate date={toDo.registerDate} className={`${DateStyles['show-date']} ${DateStyles['register-date']}`}/>
      <ShowDate date={toDo.completeDate} className={`${DateStyles['show-date']} ${DateStyles['complete-date']}`}/>
      <DeleteBtn toDo={toDo} setToDoList={setToDoList}/> 
    </div>
  )
}

export default ToDoItem