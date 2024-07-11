import { useRef, useState } from "react";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

const Main = () => {
  const [toDoList, setToDoList] = useState([]) // {registerDate, toDo, complete, completeDate}
  const toDoRef = useRef()

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
    console.log((newToDo.registerDate))

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

  return( 
  <main>
    <ToDoInput addToDoItem={addToDoItem} toDoRef={toDoRef}/>
    <ToDoList toDoList={toDoList}/>
  </main>
  )
};

export default Main;
