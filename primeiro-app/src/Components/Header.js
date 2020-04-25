import React from 'react';
import {Link} from "react-router-dom";
/*
    O Link substitui a tag a e faz com que os links levem as rotas indicadas na aplicação
*/

const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link> 
                </li>
                <li>
                    <Link to="/produtos">Produtos</Link> 
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link> 
                </li>
            </ul>
        </nav>
    )
}

export default Header
