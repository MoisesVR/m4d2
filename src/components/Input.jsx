import React from "react";

const Input = (props) => {
    return (
        <>
            <p>Nombre</p>
            <input type="text" value={props.name} placeholder="Ingresa un texto"
                onChange={(event) => {
                    props.setName(event.target.value)
                }
                } />
            <p>Contraseña</p>
            <input
                type="text"
                value={props.password}
                onChange={(event) => {
                    props.setPassword(event.target.value)
                }}
                placeholder="Ingresa una contraseña" />


        </>
    );
}

export default Input;