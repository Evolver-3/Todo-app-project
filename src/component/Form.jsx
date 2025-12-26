
import {motion} from 'motion/react'

const Form = ({setTodos}) => {

  const handleClick=(event)=>{

      event.preventDefault();
  
      const value=event.target.todo.value.trim();
      if(!value) return;
      const newTodo={title:value,id:self.crypto.randomUUID(),is_completed:false}


      setTodos((prev)=>[
        ...prev,newTodo
      ])
      const updateTodoList=JSON.stringify([...todos,newTodo])
      localStorage.setItem("todos",updateTodoList)
      event.target.reset()
  }
  
  return (
    <form onSubmit={handleClick} className='bg-white mx-5 rounded-full flex justify-between mx-10 md:mx-40'>
      <input type='text' name='todo' id='todo' placeholder='Enter you daily log here.....' className='text-sm placeholder:text-sm px-2 text-black outline-none w-full'>
      </input>
      <motion.button
      style={{}}
      className='bg-lime-400 rounded-full text-sm text-white font-bold py-2 px-3 hover:bg-lime-500 hover:text-gray-200'>Submit</motion.button>
    </form>
  )
}

export default Form