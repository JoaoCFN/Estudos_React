import React, { useState } from 'react'

const Sobre = () => {
    const [nome, setNome] = useState("João");
    const [email, setEmail] = useState("joaoneto.10");

    return (
        <div>
            <h1>Sobre</h1>
            <form action="">
                <label htmlFor="nome">{nome}</label>
                <input type="text" onChange={(event) => setNome(event.target.value)}/>
                <label htmlFor="email">{email}</label>
                <input type="email"onChange={(event) => setEmail(event.target.value)}/>
            </form>
        </div>
    )
}

export default Sobre
