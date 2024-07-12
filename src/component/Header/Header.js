import { useRef, useState } from "react"
import InputName from "./InputName"
import DisplayName from "./DisplayName"
import styles from '../../css/Header/Header.module.css'

const Header = () =>{
  const [name,setName] = useState("")
  const nameRef = useRef("")
  const [inputClass,setInputClass] = useState("input-name")
  const [displayClass,setDisplayClass] = useState(`display-name ${styles.hidden}`)

  const submitName = () =>{
    setName(nameRef.current.value)
    setInputClass(`input-name ${styles.hidden}`)
    setDisplayClass("display-name")
  }

  const modifyName = () =>{
    setInputClass("inputname")
    setDisplayClass(`displayname ${styles.hidden}`)
  }

  return(
    <header>
      <InputName nameRef={nameRef} className={inputClass} submitName={submitName}/>
      <DisplayName name={name} className={displayClass} modifyName={modifyName}/>
    </header>
  ) 
} 

export default Header