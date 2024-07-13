import React from 'react'

const ShowDate = ({date,className}) => {
  if(date === undefined) return
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDay()
  
  return (
    <p className={className}>{year}년 {month}월 {day}일</p>
  )
}

export default ShowDate