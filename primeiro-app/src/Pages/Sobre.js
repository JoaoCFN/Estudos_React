import React, { useState } from 'react'

// 1 º MANEIRA
// const Sobre = () => {
//     const [nome, setNome] = useState("João");
//     const [email, setEmail] = useState("joaoneto.10");

//     return (
//         <div>
//             <h1>Sobre</h1>
//             <form action="">
//                 <label htmlFor="nome">{nome}</label>
//                 <input type="text" onChange={(event) => setNome(event.target.value)}/>
//                 <label htmlFor="email">{email}</label>
//                 <input type="email"onChange={(event) => setEmail(event.target.value)}/>
//             </form>
//         </div>
//     )
// }

//2º MANEIRA
const Sobre = () => {
    const [form, setForm] = useState({
        nome: "João",
        email: "joaoneto.10"
    });

    const atualizaCampo = (event) => {
        setForm({
            /* Desestruturei o conteúdo de form */
            ...form,
            /* pego o id do input que corresponde a um item dentro de form e jogo 
               o valor dentro */
            [event.target.id] : event.target.value
        })
        
    }

    return (
        <div>
            <h1>Sobre</h1>
            <form action="">
                <label htmlFor="nome">{form.nome}</label>
                <input type="text" id="nome" onChange={atualizaCampo}/>
                <label htmlFor="email">{form.email}</label>
                <input type="email" id="email" onChange={atualizaCampo}/>
            </form>
        </div>
    )  
}

export default Sobre
