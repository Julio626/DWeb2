import React from "react";

export default function useForm(initialState={}){

    const [formData, setFormData] = useState (initialState)
    
        function onChangeValue({target}){
            const {name, value} = target;
            console.log(name, value)
            setFormData({...formData, [name]:value})
        }
    
        function onReset(){
            setFormData(initialState)
        }

        return {formData, onChangeValue, onReset, ...formData}
    
}