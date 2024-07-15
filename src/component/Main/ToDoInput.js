
import React, { useContext } from 'react'
import styles from '../../css/Main/ToDoInput.module.css'
import ToDoListKey from '../../ToDoListKey'
import {ToDoListContext} from '../../context/ToDoListContext'

const ToDoInput = ({toDoRef}) => {
  const {addToDoItem} = useContext(ToDoListContext)

  const clickAddBtn = () => {
    addToDoItem(toDoRef.current.value)
    toDoRef.current.value = ''
  }

  
  return (
    <section className={styles['todo-input']}>
      <input type="text" className={styles['todo-input-text']} ref={toDoRef} placeholder='할 일을 적어 주세요! :)'/>
      <button className={styles['todo-input-btn']} onClick={clickAddBtn}> 작성 </button>
    </section>
  )
}

export default ToDoInput
