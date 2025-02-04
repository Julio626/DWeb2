import React from "react";
import { Message } from "./Message";

export default function SimpleForm(){
    const [formData, setFormData] = useState ({
        username: "Julio Contreras",
        email: "juliocontreras@gmail.com"
    })
    
    const{username, email} = formData;

    function onChangeValue({target}){
        const {name, value} = target;
        console.log(name, value)
        setFormData({...formData, [name]:value})
    }

    useEffect(()=>{
        console.log('useEffect called')
    })

    useEffect (()=>{
        console.log('Componente montado')
    }, [])

    useEffect (()=>{
        console.log('Username changed')
    }, [username])



    return (
        <>
        <div className = 'container'>
            <h1>Simple Form</h1>
            <input type="text" name= 'username' placeholder="username" className = "form-control" value={username} onChange={onChangeValue}/>
            <input type="email" name="email" placeholder="Email" className="form-control" value={email} onChange = {onChangeValue}/> {(username=='Julio') && <Message/>}
        </div>
        </>
    )
}