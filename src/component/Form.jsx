import React from 'react'

const Form = ({setTodos}) => {

  const handleClick=(event)=>{

    event.preventDefault();
     
      const value=event.target.todo.value;
      setTodos((prev)=>[
        ...prev,{title:value,id:self.crypto.randomUUID(),is_completed:false}
      ])
      event.target.reset()
  }
  
  return (
    <form onSubmit={handleClick}>
      <input type='text' name='todo' id='todo' placeholder='Enter you daily log here.....'>
      </input>
      <button>Submit</button>
    </form>
  )
}

export default Form