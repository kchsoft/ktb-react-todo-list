
import React from 'react'

const ToDoInput = ({addToDoItem,toDoRef}) => {
  return (
    <section className='todoinput'>
      <input type="text" ref={toDoRef} placeholder='할 일을 적어 주세요! :)'/>
      <button onClick={addToDoItem}> 작성 </button>
    </section>
  )
}

export default ToDoInput
