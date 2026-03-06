import React, { useState, useEffect } from 'react';
import './App.css';
import FindPokemon from './FindPokemon';
import Pokemon from './Pokemon';
import eevee from '../eevee.json';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

// function App() {
//   const [tijd, setTijd] = useState(1000);
//   const [startInterval, setStartInterval] = useState(false);
//   const [som, setSom] = useState(1);
//   const [showButton, setShowButton] = useState(false);

//   const somHandler = () => {
//     console.log('ik tel bij elkaar op');
//     setSom(som * 2);
//   };

//   return (
//     <>
//       <h1>Som: {som}</h1>
//       <input value={tijd} onChange={(e) => setTijd(e.target.value)} />
//       <button onClick={() => setShowButton(!showButton)}>Laat knop zien</button>
//       {showButton ? (
//         <ButtonInterval
//           startInterval={startInterval}
//           setStartInterval={setStartInterval}
//           tijd={tijd}
//           intervalHandler={somHandler}
//         />
//       ) : (
//         ''
//       )}
//     </>
//   );
// }

// function ButtonInterval({
//   startInterval,
//   setStartInterval,
//   tijd,
//   intervalHandler,
// }) {
//   useEffect(() => {
//     const intervalId = setInterval(() => intervalHandler(), tijd);
//   }, [startInterval]);

//   return (
//     <button onClick={() => setStartInterval(!startInterval)}>
//       Start/Stop Interval
//     </button>
//   );
// }

function App() {
  const [query, setQuery] = useState(null);
  const [activePokemon, setActivePokemon] = useState(eevee);

  useEffect(() => {
    if (query) {
      fetch(`${API_URL}/${query}`)
        .then((response) => response.json())
        .then((data) => {
          setActivePokemon(data);
        });
    }
  }, [query]);

  useEffect(() => {});

  return (
    <div className="App">
      <header className="App-header">
        <p>Find your own Pokemon now!</p>
        <FindPokemon onChange={setQuery} />
      </header>
      <Pokemon pokemon={activePokemon} />
    </div>
  );
}

export default App;
