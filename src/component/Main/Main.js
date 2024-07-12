import { useRef, useState } from "react";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

const Main = () => {
  const [toDoList, setToDoList] = useState([]) // {registerDate, toDo, complete, completeDate}
  const toDoRef = useRef()

  return( 
  <main>
    <ToDoInput setToDoList={setToDoList} toDoList={toDoList} toDoRef={toDoRef}/>
    <ToDoList toDoList={toDoList} setToDoList={setToDoList}/>
  </main>
  )
};

export default Main;
