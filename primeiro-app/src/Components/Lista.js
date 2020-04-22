import React from 'react'

const Lista = () => {
    const produtos = ["Notebook", "Smartphone", "Tablet"];
    const livros = [
        { nome: "A Clash of Kings", ano: 1996 },
        { nome: "A Game of Thrones", ano: 1999 },
        { nome: "A Storm of Swords", ano: 2000 }
    ];

    return (
        <div>
            <h1>Lista</h1>
            <ul>
                {produtos.map(item => 
                    <li key = {item}> 
                        {item} 
                    </li>)
                }
            </ul>
            <ul>
                {livros.filter(livro => livro.ano > 1998)
                .map(livro => 
                    <li key = {livro.nome}> 
                        {livro.nome} | {livro.ano}
                    </li>)
                }    
            </ul>
        </div>
    )
}

export default Lista
