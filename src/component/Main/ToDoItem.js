import React from 'react'
import ShowDate from './ToDoItem/ShowDate'

const ToDoItem = ({toDo}) => {
  return (
    <div className='todoitem'>
      <input type='checkbox' checked={toDo.complete}/>
      <div className='todo'>{toDo.toDo}</div>
      <ShowDate className='registerdate' date={toDo.registerDate}/>
      <ShowDate className='completedate' date={toDo.completeDate}/>
      <button>삭제</button>
    </div>
  )
}

export default ToDoItem