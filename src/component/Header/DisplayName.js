import styles from '../../css/Header/DisplayName.module.css'

const DisplayName = ({ name,className, modifyName }) => {
  return(
    <section className={className}>
      <p className={`${styles['welcome-comment']}`}>환영합니다🎉 {name} 님!</p>
      <button className={`${styles['name-modify-btn']}`} onClick={modifyName}>수정</button>
    </section>
  )

};

export default DisplayName;