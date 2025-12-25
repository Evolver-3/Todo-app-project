import React, { useEffect, useRef, useState } from 'react'

const TodoList = ({todos,setTodos}) => {
  return (
    <ol className='flex flex-col items-start pl-5 overflow-y-scroll '>
      {todos.length>0? (
        todos.map((item,index)=>
        <Item key={index} item={item} setTodos={setTodos} todos={todos}></Item> )):(
          <p className='text-white font-mono'>type anything....</p>
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

    //const updatedTodos=JSON.stringify(todos);
   // localStorage.setItem("todos",updatedTodos)
    setEdit(false)
  }
  const handleInputBlur=()=>{
    //const updatedTodos=JSON.stringify(todos)
   // localStorage.setItem("todos",updatedTodos)
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
    
  //const updatedTodos=JSON.stringify(todos);
 // localStorage.setItem("todos",updatedTodos);
  }



  const handleDelete=()=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!==item.id))

    //const updatedTodos=JSON.stringify(
      //todos.filter((todo)=>todo.id !==item.id) )
      //localStorage.setItem("todos",updatedTodos)
   

  }
  return(
    <li id={item.id} className='flex items-center justify-center gap-2 '>

      {edit? (
        <form onSubmit={handleSubmit}>
          <input ref={inputRef} type='text' name='edit-todo' id='edit-todo' defaultValue={item.title}
          onChange={handleChange} onBlur={handleInputBlur}
          ></input>
        </form>
      ):(
        <>
        <button onClick={finishedTodo}>
        <p className='text-white font-mono' style={item.is_completed? {textDecoration:"line-through"}:{}}>{item.title}</p></button>

      <div className='flex gap-4'>
        <button className='bg-lime-400 rounded-xl px-2 py-1' onClick={handleEdit}>
          <span className='text-white font-bold hover:text-neutral-300'>Edit</span>
        </button>
        <button className='bg-lime-400 rounded-xl px-2 py-1' onClick={handleDelete}>
          <span className='text-white font-bold hover:text-neutral-300'>Delete</span>
        </button>
      </div>
      </>
      )}

      
    </li>
  )
}