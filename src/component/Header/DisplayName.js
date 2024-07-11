
const DisplayName = ({ name,className, modifyName }) => {

  return(
    <section className={className}>
      <p>환영합니다🎉 {name} 님!</p>
      <button onClick={modifyName}>수정</button>
    </section>
  )

};

export default DisplayName;