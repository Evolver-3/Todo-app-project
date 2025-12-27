import React, { useEffect, useRef, useState } from 'react'
import {motion} from 'motion/react'

const TodoList = ({todos,setTodos}) => {
  return (
    <ol className='flex flex-col items-start mx-10 md:mx-35 mt-10 overflow-hidden gap-4 '>
      {todos.length>0? (
        todos.map((item,index)=>
        <Item key={index} item={item} setTodos={setTodos} todos={todos}></Item> )):(
          <p></p>
        )
      }

    </ol>
  )
}

export default TodoList

function Item({item,setTodos}){
  const [edit,setEdit]=useState(false);
  const inputRef=useRef(null)

  const handleEdit=()=>{
    setEdit(true);
  }
  const handleSubmit=(event)=>{
    event.preventDefault();

    setEdit(false)
  }
  const handleInputBlur=()=>{

    setEdit(false)
  }


  useEffect(()=>{
    if(edit && inputRef.current){
      inputRef.current.focus();

      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      )
    }
  },[edit])

  const handleChange=(e)=>{
    setTodos((prev)=>prev.map((todo)=>todo.id===item.id ?{...todo,title:e.target.value}:todo))
  }

  const finishedTodo=()=>{
    setTodos((prev)=>prev.map((todo)=>todo.id===item.id?{...todo,is_completed: !todo.is_completed}:todo));
    
  }

  const handleDelete=()=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!==item.id))
   
  }
  return(
    <motion.li
    initial={{opacity:0,y:100}}
    whileInView={{opacity:1,y:0}}
    transition={{delay:.3,duration:.6}}
    id={item.id} className='flex w-full h-20 border-[2px] border-lime-700 rounded px-4 justify-between items-center'>

      {edit? (
        <form onSubmit={handleSubmit} >
          <input ref={inputRef} type='text' name='edit-todo' id='edit-todo' defaultValue={item.title}
          onChange={handleChange} onBlur={handleInputBlur} className='outline-none font-semibold'
          ></input>
        </form>
      ):(
        <>

        <button onClick={finishedTodo} className='offset-x-scroll '>
          <p className='text-white font-mono text-start' style={item.is_completed? {textDecoration:"line-through"}:{}}>{item.title}</p>
        </button>

        <div className='flex gap-4'>

          <button className='relative cursor-pointer w-20 h-10' onClick={handleEdit}>

           <motion.div
           
           whileTap={{translateY:"3px"}}
           transition={{ease:"easeInOut"
           }}
           className='relative w-[100%] h-[100%] text-md font-semibold text-center text-neutral-300 bg-gray-500 px-2 py-2 rounded-md z-10 hover:text-gray-400'>Edit</motion.div>

           <div className='absolute w-[100%] h-[100%] top-[3px] bg-orange-400 outline-2 outline-neutral-500 rounded-md'></div>

          </button>


          <button className='relative cursor-pointer w-20 h-10' onClick={handleDelete}>

            <motion.div
            whileTap={{translateY:"3px"}}
           transition={{ease:"easeInOut"
           }}
            className='relative w-[100%] h-[100%] text-md font-semibold text-center text-neutral-300 bg-gray-500 px-2 py-2 rounded-md z-10 hover:text-gray-400'>Delete</motion.div>

            <div className='absolute w-[100%] h-[100%] top-[3px] bg-orange-400 outline-2 outline-neutral-500 rounded-md'></div>

          </button>
        </div>
      </>
      )}

      
    </motion.li>
  )
}