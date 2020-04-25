import React, { useState, useEffect } from 'react';

export default function App() {
  const [repositorios, setRepositorios] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/JoaoCFN/repos").then(reponse => reponse.json())
    .then(data => setRepositorios(data))     
  }, [])

  useEffect(() => {
    const filtered = repositorios.filter(repo => repo.favorite)
    document.title = `Favoritos: ${filtered.length}`;
  }, [repositorios])

  function favorite (id){
    const newRepo = repositorios.map(repo => {
        return repo.id === id ? {...repo, favorite: !repo.favorite}: {...repo}
      }
    )  
    setRepositorios(newRepo);
  } 

  return ( 
    <div>
      <ul>
        {repositorios.map(repo => 
          <li key={repo.id}>
            {repo.name}
            {repo.favorite ? <span>(Favorito)</span> : ""}
            <button onClick={() => favorite(repo.id)}> Favoritar </button>
          </li>)
        }
      </ul>
    </div>
  );
}

