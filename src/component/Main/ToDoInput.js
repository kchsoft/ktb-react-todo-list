
import React from 'react'
import styles from '../../css/Main/ToDoInput.module.css'
import ToDoListKey from '../../ToDoListKey'

const ToDoInput = ({setToDoList,toDoList,toDoRef}) => {

  const addToDoItem = () => {
    const item = toDoRef.current.value
    if(item.trim() === '') return
    if(checkDuplicateToDo(item)) return

    const newToDo = {
      registerDate : new Date(),
      toDo : item,
      complete : false,
      completeDate : 'not-complete'
    }
    
    const newList = [...toDoList,newToDo]
    setToDoList(newList)
    toDoRef.current.value = ''
    localStorage.setItem(ToDoListKey,JSON.stringify(newList))
  }
  
  const checkDuplicateToDo = (item) => {
    if(toDoList.some((toDo) => toDo.toDo === item)){
      alert("중복된 [할 일]이 있습니다.")
      return true
    }
    return false
  }
  
  return (
    <section className={styles['todo-input']}>
      <input type="text" className={styles['todo-input-text']} ref={toDoRef} placeholder='할 일을 적어 주세요! :)'/>
      <button className={styles['todo-input-btn']} onClick={addToDoItem}> 작성 </button>
    </section>
  )
}

export default ToDoInput
