import React, { useContext, useReducer } from 'react'
import { ToDoStateContext } from './context/ToDoContext'
import {ToDoAdd} from './components/ToDoAdd'



export const ToDoApp = () => {

    const state = useContext(ToDoStateContext)
    const {todos}=state

    return (
        <div className='container'>
            <h1>Lista de tareas</h1>
            <hr />
            <div className='row'>
                <div className='col-7'>
                    {todos.map((task)=>(
                        <p key={task.id}>{task.name}</p>
                    ))}
                </div>
                <div className='col-5'>
                    <ToDoAdd />
                </div>
            </div>
           
        </div>
    )
}
