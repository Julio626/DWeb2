import React from 'react'
import { useParams } from 'react-router'

export const EditUser = () => {

    const { userid } = useParams()

    return (
        <div>
            <h3>Formulario para editar el usuario {userid}</h3>
        </div>
    )
}
