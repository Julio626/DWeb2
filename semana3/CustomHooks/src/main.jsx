import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SimpleForm from './useEffect/simpleForm'
import SimpleFormWithCustomHook from './useEffect/SimpleFormWithCustomHook'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SimpleFormWithCustomHook />
  </StrictMode>,
)
