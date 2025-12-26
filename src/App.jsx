import { useState,useEffect } from 'react'
import {animate, motion,useMotionTemplate,useMotionValue} from 'motion/react'

import Form from './component/Form'
import TodoHero from './component/TodoHero'
import TodoList from './component/TodoList'

const COLORS=["#13FFAA","#3c8cd4","#CE84CF","#613473"]
function App() {

  const colors=useMotionValue(COLORS[0])
  const backgroundImage=useMotionTemplate`radial-gradient( 125% 125% at 50% 0%, #3c8089ff 40%, ${colors})`
  
  useEffect(()=>{
    animate(colors,COLORS,{
      ease:"easeInOut",
      duration:10,
      repeat:Infinity,
      repeatType:"mirror"
    },
  )
  },[])

  const [todos,setTodos] = useState(()=>{
    const storedTodos=localStorage.getItem("todos")
    return storedTodos ? JSON.parse(storedTodos): []
  })

 
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  const todos_completed=todos.filter((todo)=>todo.is_completed).length;

  const total_todos=todos.length;

  return (
    <motion.div
    style={{backgroundImage}}
     className='h-auto min-h-[736px] flex flex-col gap-10 py-10'>
      
      <div className=''>
        <TodoHero todos_completed={todos_completed} total_todos={total_todos} />
      </div>
      <div>
        <Form setTodos={setTodos} todos={todos}  />
        <TodoList todos={todos} setTodos={setTodos}/>
      </div>


      
    </motion.div>
  )
}

export default App
