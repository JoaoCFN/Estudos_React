import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import Produtos from "./Pages/Produtos";
import "./estilo.css";

const App = () => {
    /* Para trabalharmos com rotas precisamos importar a lib react router dom
       Após isso desestrutamos os 4 itens acima:
        - Browser Router: Engloba toda a estrutura de rotas
        - Route: Serve para a contrução das rotas usando a prop path
        - Switch: Garante que apenas um elemento será mostrado na tela para o usuário
            OBS: Você também pode usar o exact para driblar o uso do Switch
    */ 
    return (
        <BrowserRouter> 
            <Header />  
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/produtos">
                <Produtos />
            </Route>
            <Route path="/Sobre">
                <Sobre />
            </Route>
        </BrowserRouter>
    )
}

export default App; 