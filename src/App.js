import { useState, useEffect } from 'react';
import './App.css';
import { getCountries } from './services/getCountries';

function App() {
  const [countries, setCountries] = useState([]);
  const [continents, setContinents] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [continent, setContinent] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await getCountries();
      setCountries(response);
      const continentsEach = [...new Set(response.map((cont) => cont.continent))];
      setContinents(continentsEach);
    };
    fetchCountries();
  }, []);

  const countriesFilter = () => {
    const countriesFilterii = countries.filter(
      (cont) =>
        (continent === 'all' ? true : cont.continent === continent) && cont.name.toLowerCase()
    );
    return countriesFilterii;
  };

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
      <div className="allCountries">
        {countriesFilter().map((cont) => (
          <div className="country" key={cont.name}>
            <h3>{cont.name}</h3>
            <img
              src={`https://flagcdn.com/72x54/${cont.iso2.toLowerCase()}.png`}
              width="60"
              height="45"
              alt={cont.name}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
