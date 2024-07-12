
import React from 'react'

const ToDoInput = ({setToDoList,toDoList,toDoRef}) => {

  const addToDoItem = () => {
    const item = toDoRef.current.value
    if(item.trim() === '') return
    if(checkDuplicateToDo(item)) return

    const newToDo = {
      registerDate : new Date(),
      toDo : item,
      complete : false,
      completeDate : undefined
    }

    setToDoList((oldList) => [...oldList,newToDo])
    toDoRef.current.value = ''
  }
  
  const checkDuplicateToDo = (item) => {
    if(toDoList.some((toDo) => toDo.toDo === item)){
      alert("중복된 ToDo가 있습니다.")
      return true
    }
    return false
  }
  
  return (
    <section className='todo-input'>
      <input type="text" ref={toDoRef} placeholder='할 일을 적어 주세요! :)'/>
      <button onClick={addToDoItem}> 작성 </button>
    </section>
  )
}

export default ToDoInput
