
import { useState, useEffect } from 'react';
import './App.css';
import { getCountries } from './services/getCountries';

function App() {
  const [countries, setCountries] = useState([]);
  const [continents, setContinents] = useState([]);
  const [continent, setContinent] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await getCountries();
      setCountries(response);
    };
    fetchCountries();
  }, []);

  return (
    <>
      <div className="App">
        <h2>Countries of Earth</h2>
        <select className="dropdown" onChange={(event) => setContinents(event.target.value)}>
          <option value="all">all</option>
          {!!continents.length &&
            continents.map((cont) => (
              <option key={cont} value={cont}>
                {cont}
              </option>
            ))}
        </select>
      </div>
      <div className="allCountries"></div>
    </>
  );
}

export default App;
