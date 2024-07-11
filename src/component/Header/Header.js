import { useRef, useState } from "react"
import InputName from "./InputName"
import DisplayName from "./DisplayName"

const Header = () =>{
  const [name,setName] = useState("")
  const nameRef = useRef("")

  return(
    <header>
      <InputName setName={setName} nameRef={nameRef}/>
      <DisplayName name={name}/>
    </header>
  )
} 

export default Header