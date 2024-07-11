

const InputName = ({nameRef,className,submitName}) => {
  return(
    <section className={className} >
      <input type="text" ref={nameRef} placeholder='이름을 알려주세요!😄'/>
      <button onClick={submitName}>확인</button>
    </section>
  )

}

export default InputName