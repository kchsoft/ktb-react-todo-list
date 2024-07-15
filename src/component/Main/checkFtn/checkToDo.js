

const checkToDoListValidation = (localToDo) => {
  let notToDo = false
  if(!Array.isArray(localToDo)) throw new Error()

  const verifiedToDoList = localToDo.filter((todo) => {
    if(typeof todo.registerDate === 'object' &&
      typeof todo.toDo === 'string' &&
      typeof todo.complete == 'boolean' &&
      (typeof todo.completeDate === 'string' || typeof todo.completeDate === 'object') ){
        return true
      }
      notToDo = true
      return false
  })
  
  if(notToDo === true) alert('오류로 인하여 일부 [할 일]은 가져올 수 없습니다.')
  return verifiedToDoList
}

const checkDuplicateToDo = (toDoList,item) => {
  if(toDoList.some((toDo) => toDo.toDo === item)){
    alert("중복된 [할 일]이 있습니다.")
    return true
  }
  return false
}

export {checkToDoListValidation, checkDuplicateToDo}