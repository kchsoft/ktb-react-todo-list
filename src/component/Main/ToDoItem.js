import React, { useContext } from 'react'
import ShowDate from './ToDoItem/ShowDate'
import DeleteBtn from './ToDoItem/DeleteBtn'
import ToDoItemStyles from '../../css/Main/ToDoItem/ToDoItem.module.css'
import DateStyles from '../../css/Main/ToDoItem/ShowDate.module.css'
import { ToDoListContext } from '../../context/ToDoListContext'


const ToDoItem = ({toDo}) => {
  const {checkComplete} = useContext(ToDoListContext)

  const clickComplete = () =>{
    checkComplete(toDo)
  }

  return (
    <div className={ToDoItemStyles['todo-item']}>
      <input className={ToDoItemStyles['complete-box']} type="checkbox" onChange={clickComplete} checked={toDo.complete}/>
      <p className={`${ToDoItemStyles['todo']} ${toDo.complete ? ToDoItemStyles['line-through'] : '' }`}>{toDo.toDo}</p>
      <ShowDate date={toDo.registerDate} className={`${DateStyles['show-date']} ${DateStyles['register-date']}`}/>
      <ShowDate date={toDo.completeDate} className={`${DateStyles['show-date']} ${DateStyles['complete-date']}`}/>
      <DeleteBtn toDo={toDo}/> 
    </div>
  )
}

export default ToDoItem