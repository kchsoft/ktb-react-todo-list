import React from 'react'

const ShowDate = ({date,className}) => {
  if(typeof date === 'string') return
  const year = date.getFullYear()
  const month = date.getMonth()+1
  const day = date.getDate()
  
  return (
    <p className={className}>{year}년 {month}월 {day}일</p>
  )
}

export default ShowDate