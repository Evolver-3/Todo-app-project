import React from 'react'

const TodoList = ({todos}) => {
  return (
    <ol className='flex flex-col items-start pl-5 overflow-y-scroll '>
      {todos.length>0? (
        todos.map((item,index)=>
        <Item key={index} item={item}></Item>)):(
          <p className='text-white font-mono'>type anything....</p>
        )
      }

    </ol>
  )
}

export default TodoList

function Item({item}){
  return(
    <li id={item.id} className='flex items-center justify-center gap-2 '>
      <button><p className='text-white font-mono'>{item.title}</p></button>

      <div className='flex gap-4'>
        <button className='bg-lime-400 rounded-xl px-2 py-1'>
          <span className='text-white font-bold hover:text-neutral-300'>Edit</span>
        </button>
        <button className='bg-lime-400 rounded-xl px-2 py-1'>
          <span className='text-white font-bold hover:text-neutral-300'>Delete</span>
        </button>
      </div>
    </li>
  )
}