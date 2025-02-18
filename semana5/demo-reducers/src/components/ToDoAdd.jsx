import React, { useContext, useState } from 'react'
import { ToDoDispatchContext } from '../context/ToDoContext'

export const ToDoAdd = () => {

  const [name, setName] = useState("")
  const dispatch = useContext(ToDoDispatchContext)

  function handleOnChange(e){
    setName(e.target.value)
  }

  function handleOnSubmit(e){
    e.preventDefault();

    if(name.trim().length<1){
      return
    }

    const newTask = {
      id: new Date().getTime(),
      name
    }

    dispatch({type:"add", payload:newTask})
  }

  return (
    <>
      <h4>Nueva Tarea</h4>
      <form className="form" onSubmit={handleOnSubmit}>
        <input type="text"
          className="form-control"
          onChange={handleOnChange}
        />

        <button type='submit' className='btn btn-primary'></button>
      </form>
    </>
  )
}
