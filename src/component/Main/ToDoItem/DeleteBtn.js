import React from 'react'
import styles from '../../../css/Main/ToDoItem/DeleteBtn.module.css'

const DeleteBtn = ({toDo, setToDoList}) => {

  const deleteToDo = () => {
    setToDoList((oldList) => {
      return oldList.filter((old) => old.registerDate !== toDo.registerDate)
    })
  }

  return (
    <button className={styles['delete-btn']} onClick={deleteToDo}> 삭제 </button>
  )
}

export default DeleteBtn