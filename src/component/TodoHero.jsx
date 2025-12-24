import React from 'react'

const TodoHero = ({todos_completed,totol_todos}) => {
  return (
    <>
    <div>
      <p>Task Done</p>
      <p>Keep it up</p>
    </div>
    <div>
      {todos_completed}/{totol_todos}
    </div>
    </>
  )
}

export default TodoHero