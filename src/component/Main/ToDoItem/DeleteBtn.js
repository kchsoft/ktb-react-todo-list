import React, { useContext } from 'react'
import styles from '../../../css/Main/ToDoItem/DeleteBtn.module.css'
import { ToDoListContext } from '../../../context/ToDoListContext'

const DeleteBtn = ({toDo}) => {
  const {deleteToDoItem} = useContext(ToDoListContext)
  
  const clickDelBtn = () => {
    deleteToDoItem(toDo)
  }

  return (
    <button className={styles['delete-btn']} onClick={clickDelBtn}> 삭제 </button>
  )
}

export default DeleteBtn