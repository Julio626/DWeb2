import React from "react";
import { Message } from "./Message";
import useForm from "../hooks/useForm";

export default function SimpleFormWithCustomHook(){

    const {username, email, password, onChangeValue, onReset}=useForm({
        username: "",
        email: "",
        password: ""
    })

    return (
        <>
        <div className = 'container'>
            <h1>Simple Form</h1>
            <input type="text" name= 'username' placeholder="username" className = "form-control" value={username} onChange={onChangeValue}/>
            <input type="email" name="email" placeholder="Email" className="form-control" value={email} onChange = {onChangeValue}/> 
            <input type="password" name="password" placeholder="Password" className="form-control my-2" value={password} onChange = {onChangeValue}/> 
            <button className="btn btn-primary" onClick={onReset}>Reset</button>{(username=='Julio') && <Message/>}
        </div>
        </>
    )
}