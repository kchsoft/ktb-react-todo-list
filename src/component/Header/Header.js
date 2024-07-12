import { useRef, useState } from "react"
import InputName from "./InputName"
import DisplayName from "./DisplayName"
import HeaderStyles from '../../css/Header/Header.module.css'
import DisplayStyles from '../../css/Header/DisplayName.module.css'
import InputStyles from '../../css/Header/InputName.module.css'

const Header = () =>{
  const [name,setName] = useState("")
  const nameRef = useRef("")
  const [inputClass,setInputClass] = useState(InputStyles['input-name'])
  const [displayClass,setDisplayClass] = useState(`${DisplayStyles['display-name']} ${HeaderStyles.hidden}`)

  const submitName = () =>{
    setName(nameRef.current.value)
    setInputClass(`${InputStyles['input-name']} ${HeaderStyles.hidden}`)
    setDisplayClass(`${DisplayStyles['display-name']}`)
  }

  const modifyName = () =>{
    setInputClass(`${InputStyles['input-name']}`)
    setDisplayClass(`${DisplayStyles['display-name']} ${HeaderStyles.hidden}`)
  }
  
  return(
    <header className={HeaderStyles.header} >
      <InputName nameRef={nameRef} className={inputClass} submitName={submitName}/>
      <DisplayName name={name} className={displayClass} modifyName={modifyName}/>
    </header>
  ) 
} 

export default Header