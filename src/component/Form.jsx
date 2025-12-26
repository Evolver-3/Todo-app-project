
import {color, motion} from 'motion/react'

const Form = ({setTodos}) => {

  const handleClick=(event)=>{

      event.preventDefault();
  
      const value=event.target.todo.value.trim();
      if(!value) return null;
      const newTodo={title:value,id:self.crypto.randomUUID(),is_completed:false}

      setTodos((prev)=>[
        ...prev,newTodo
      ])
      const updateTodoList=JSON.stringify([...todos,newTodo])
      localStorage.setItem("todos",updateTodoList);
      event.target.reset();
      
  }
  
  return (
    <form onSubmit={handleClick} className='flex justify-around w-full px-10 md:px-20 gap-5'>
      <input type='text' name='todo' id='todo' placeholder='Enter you daily log here.....' className='text-sm placeholder:text-sm px-2 text-black outline-none bg-white rounded-full w-100 md:w-200'>
      </input>
      <button
      className='cursor-pointer relative w-40 h-10'>
        <motion.div
        whileTap={{translateY:"6px",webkitTextFillColor:"purple"}}
        className='relative z-10 w-[100%] h-[100%] text-sm text-center text-white font-bold rounded-[25px] bg-neutral-400 px-6 py-2 '>Submit</motion.div>
        <div className="w-[100%] h-[100%] text-sm text-center outline-2 outline-blue-400 rounded-[25px] bg-orange-400 absolute top-[6px]"></div>
      </button>
    </form>
  )
}

export default Form