import { useRef, useState } from "react";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import ToDoCategory from "./ToDoCategory";
import styles from '../../css/Main/Main.module.css'

const Main = () => {
  const [toDoList, setToDoList] = useState([]) // {registerDate, toDo, complete, completeDate}
  const toDoRef = useRef()

  return( 
  <main className={styles['main']}>
    <ToDoInput setToDoList={setToDoList} toDoList={toDoList} toDoRef={toDoRef}/>
    <ToDoCategory/>
    <ToDoList toDoList={toDoList} setToDoList={setToDoList}/>
  </main>
  )
};

export default Main;
