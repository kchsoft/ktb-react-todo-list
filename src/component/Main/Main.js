import { useContext, useEffect, useRef} from "react";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import ToDoCategory from "./ToDoCategory";
import ToDoListKey from "../../ToDoListKey";
import styles from '../../css/Main/Main.module.css'
import {ToDoListContext} from "../../context/ToDoListContext";

const Main = () => {
  const {loadToDoList} = useContext(ToDoListContext) 
  const toDoRef = useRef()

  useEffect(() => {
    loadToDoList()
  },[])

  return( 
  <main className={styles['main']}>
    <ToDoInput toDoRef={toDoRef}/>
    <ToDoCategory/>
    <ToDoList/>
  </main>
  )
};

export default Main;
