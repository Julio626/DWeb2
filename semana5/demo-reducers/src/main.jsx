import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToDoApp } from './ToDoApp'
import { ToDoContext } from './context/ToDoContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToDoContext>
    <ToDoApp />
    </ToDoContext>
  </StrictMode>,
)
