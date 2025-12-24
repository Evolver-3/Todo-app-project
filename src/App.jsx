import { useState } from 'react'
import Header from './component/Header'
import TodoHero from './component/TodoHero'
import Form from './component/Form'
import TodoList from './component/TodoList'


function App() {
  const [todos,setTodos] = useState([])
  
  const todos_completed=todos.filter((todo)=>todo.is_completed === true).length;

  const total_todos=todos.length;

  

  return (
    <>
      <div className='h-screen bg-neutral-400'>
        <Header/>
        <TodoHero todos_completed={todos_completed} totol_todos={total_todos}/>
        <Form setTodos={setTodos}/>
        <TodoList todos={todos}/>

      </div>
    </>
  )
}

export default App
