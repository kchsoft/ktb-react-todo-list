import React from 'react'
import styles from '../../../css/Main/ToDoItem/DeleteBtn.module.css'
import ToDoListKey from '../../../ToDoListKey'

const DeleteBtn = ({toDo, setToDoList}) => {

  const deleteToDo = () => {
    setToDoList((oldList) => {
      const newList = oldList.filter((old) => old.registerDate !== toDo.registerDate)
      localStorage.setItem(ToDoListKey,JSON.stringify(newList))
      return newList
    })
  }

  return (
    <button className={styles['delete-btn']} onClick={deleteToDo}> 삭제 </button>
  )
}

export default DeleteBtn