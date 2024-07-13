import React from 'react'
import styles from '../../css/Main/ToDoCategory.module.css'

const ToDoCategory = () => {
  return (
    <section className={styles['todo-category']}>
      <p className={styles.complete}>완료</p>
      <p className={styles.todo}>할 일</p>
      <p className={styles.date}>작성 날짜</p>
      <p className={styles.date}>완료 날짜</p>
      <p className={styles.delete}>삭제</p>
    </section>
  )
}

export default ToDoCategory