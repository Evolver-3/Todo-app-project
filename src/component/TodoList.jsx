import React from 'react'

const TodoList = ({todos}) => {
  return (
    <ol>
      {todos && todos.length>0? (
        todos.map((item,index)=>
        <Item key={index} item={item}></Item>)):(
          <p>type anything</p>
        )
      }

    </ol>
  )
}

export default TodoList

function Item({item}){
  return(
    <li id={item.id}>
      <button><p>{item.title}</p></button>

      <div>
        <button>
          <span>Edit</span>
        </button>
        <button>
          <span>Delete</span>
        </button>
      </div>
    </li>
  )
}