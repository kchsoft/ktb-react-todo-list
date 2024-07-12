import React from 'react'

const DeleteBtn = ({toDo, setToDoList}) => {

  const deleteToDo = () => {
    setToDoList((oldList) => {
      return oldList.filter((old) => old.registerDate !== toDo.registerDate)
    })
  }

  return (
    <button onClick={deleteToDo}>삭제</button>
  )
}

export default DeleteBtn