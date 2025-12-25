

const TodoHero = ({todos_completed,total_todos}) => {
  return (
    <>
 
    <div>
      <h2 className='text-3xl font-semibold text-white'>Todo</h2>
      <p className='text-2xl font-bold '>
      {todos_completed}/{total_todos}
      </p>
    </div>
    </>
  )
}

export default TodoHero