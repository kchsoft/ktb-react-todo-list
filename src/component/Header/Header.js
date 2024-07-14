import { useRef, useState,useEffect } from "react"
import InputName from "./InputName"
import DisplayName from "./DisplayName"
import HeaderStyles from '../../css/Header/Header.module.css'
import DisplayStyles from '../../css/Header/DisplayName.module.css'
import InputStyles from '../../css/Header/InputName.module.css'

const nameKey = 'ToDoListName'

const Header = () =>{

  let localName = localStorage.getItem(nameKey)
  const [name,setName] = useState(localName)
  const nameRef = useRef(localName)
  const [inputClass,setInputClass] = useState()
  const [displayClass,setDisplayClass] = useState()

  const loadName= () => {
    if(localName === null || localName === ''){ 
      setInputClass(InputStyles['input-name'])
      setDisplayClass(`${DisplayStyles['display-name']} ${HeaderStyles.hidden}`)
      return
    }

    setName(localName)
    setInputClass(`InputStyles['input-name'] ${HeaderStyles.hidden}`)
    setDisplayClass(`${DisplayStyles['display-name']}`)
  }


  const submitName = () =>{
    setName(nameRef.current.value)
    setInputClass(`${InputStyles['input-name']} ${HeaderStyles.hidden}`)
    setDisplayClass(`${DisplayStyles['display-name']}`)
    localStorage.setItem(nameKey,nameRef.current.value)
  }

  const modifyName = () =>{
    setInputClass(`${InputStyles['input-name']}`)
    setDisplayClass(`${DisplayStyles['display-name']} ${HeaderStyles.hidden}`)
    nameRef.current.value = name
  }

  useEffect(() => {
    loadName()
  },[])

  return(
    <header className={HeaderStyles.header} >
      <InputName nameRef={nameRef} className={inputClass} submitName={submitName}/>
      <DisplayName name={name} className={displayClass} modifyName={modifyName}/>
    </header>
  ) 
} 

export default Header