import { useState,useEffect } from 'react'
import {animate, motion,useMotionTemplate,useMotionValue} from 'motion/react'

import TodoHero from './component/TodoHero'
import Form from './component/Form'
import TodoList from './component/TodoList'


const COLORS=["#13FFAA","#1E67C6","#CE84CF","#10103dff"]
function App() {

 
  const colors=useMotionValue(COLORS[0])
  const backgroundImage=useMotionTemplate`radial-gradient( 125% 125% at 50% 0%, #020617 40%, ${colors})`
  


  useEffect(()=>{
    animate(colors,COLORS,{
      ease:"easeInOut",
      duration:10,
      repeat:Infinity,
      repeatType:"mirror"
    })
  },[])


  const [todos,setTodos] = useState([])
  
  const todos_completed=todos.filter((todo)=>todo.is_completed === true).length;

  const total_todos=todos.length;


  return (
    <motion.div
    style={{backgroundImage}}
     className='h-screen flex items-center justify-center '>
      <div className="w-100 h-100 md:w-240 rounded-md bg-neutral-500 text-center flex flex-col py-5 gap-4">
       
        <TodoHero todos_completed={todos_completed} totol_todos={total_todos} />
        <Form setTodos={setTodos} backgroundImage={backgroundImage}/>
        <TodoList todos={todos} />

      </div>
    </motion.div>
  )
}

export default App
