import React from 'react'

const Atributos = () => {
    const abre = 8;
    const agora = new Date().getHours();
    return (
        <div>
            <h1>Atributos</h1>
            <p className = {agora > abre ? "aberto": "fechado"}>
                {agora > abre ? "Aberto" : "Fechado"}
            </p>
        </div>
    ) 
}

export default Atributos
