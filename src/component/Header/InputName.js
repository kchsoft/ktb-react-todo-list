import styles from '../../css/Header/InputName.module.css'

const InputName = ({nameRef,className,submitName}) => {
  return(
    <section className={className} >
      <input type="text" ref={nameRef} placeholder='이름을 알려주세요!😄'/>
      <button className={`${styles['name-submit-btn']}`}onClick={submitName}>확인</button>
    </section>
  )

}

export default InputName