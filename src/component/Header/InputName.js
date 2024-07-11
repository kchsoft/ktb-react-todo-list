
import { useState } from 'react';
import styles from '../../css/Header/Header.module.css'

const basicClassName = "inputname"

const InputName = ({setName,nameRef}) => {
  const [className,setClassName] = useState(basicClassName)

  const submitName = () =>{
    setName(nameRef.current.value)
    const newClassName = basicClassName + " " + styles.hidden
    setClassName(newClassName)
  }

  return(
    <section className={className} >
      <input type="text" ref={nameRef} placeholder='이름을 알려주세요!😄'/>
      <button onClick={submitName}>확인</button>
    </section>
  )
}

export default InputName