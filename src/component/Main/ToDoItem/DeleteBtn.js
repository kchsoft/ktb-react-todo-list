import React, { useContext } from 'react'
import styles from '../../../css/Main/ToDoItem/DeleteBtn.module.css'
import { ToDoListContext } from '../../../context/ToDoListContext'

const DeleteBtn = ({toDo}) => {
  const {deleteToDoItem} = useContext(ToDoListContext)

  const handleDeleteBtn = () => {
    deleteToDoItem(toDo)
  }

  return (
    <button className={styles['delete-btn']} onClick={handleDeleteBtn}> 삭제 </button>
  )
}

export default DeleteBtn