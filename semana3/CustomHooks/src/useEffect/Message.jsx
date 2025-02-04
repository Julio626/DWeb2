import { useEffect } from "react"

export const Message = ()=> {

    const mouseMoveListener = (event)=>{
        console.log(event)
    }

    useEffect(() => {

        window.addEventListener('mousemove', mouseMoveListener)

        return () => {
            window.removeEventListener('mousemove', mouseMoveListener)
        }
    }, [])

    return (
        <div>
            <span className = 'badge bg-danger'>
                Este usuario ya existe
            </span>
        </div>
    )
}