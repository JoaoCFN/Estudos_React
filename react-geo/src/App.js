import React, { useState, useEffect} from 'react';

function App() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    navigator.geolocation.watchPosition(posicao_recebida); 
  }, [])

  function posicao_recebida ({coords}) {
    setLocation(coords);        
  }

  return (
    <div>
      <li> Latitude: {location.latitude} </li>
      <li> Longitude:  {location.longitude} </li>      
    </div>
  );
}

export default App;
