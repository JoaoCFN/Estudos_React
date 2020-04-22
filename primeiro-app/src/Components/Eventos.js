import React from 'react'

const Eventos = () => {
    const ativaCompra = (event) => {
        event.target.innerHTML = `Salve`;
    }

    return (
        <div>
            <h1>Eventos</h1>
            <button onClick = {ativaCompra}>Clique Aqui</button>
        </div>
    )
}

export default Eventos
