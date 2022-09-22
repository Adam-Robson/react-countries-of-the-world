import { useState, useEffect } from 'react';
import { getCountries } from './services/getCountries';
import Load from './Components/Load/Load';

import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState([]);
  const [continents, setContinents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await getCountries();
      setCountries(response);
      const continentsEach = [...new Set(response.map((cont) => cont.continent))];
      setContinents(continentsEach);
      setTimeout(() => setLoading(false), 2500);
    };
    fetchCountries();
  }, []);

  const countriesFilter = () => {
    const countriesFilterii = countries.filter(
      (cont) =>
        (continent === 'all' ? true : cont.continent === continent) &&
        cont.name.toLowerCase().includes(query)
    );
    return countriesFilterii;
  };

  return (
    <div className="App">
      <h2>Countries of Earth</h2>
      <div className="sort">
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value.toLowerCase())}
        />
        <select className="dropdown" onChange={(event) => setContinent(event.target.value)}>
          <option value="all">all</option>
          {!!continents.length &&
            continents.map(
              (cont) =>
                !!cont && (
                  <option key={cont} value={cont}>
                    {cont}
                  </option>
                )
            )}
        </select>
      </div>
      <div className="allCountries">
        {loading && <Load />}
        {!loading &&
          countriesFilter().map((cont) => (
            <div className="countryContainer" key={cont.name}>
              <h3>{cont.name}</h3>
              <img
                src={`https://flagcdn.com/72x54/${cont.iso2.toLowerCase()}.png`}
                width="72"
                height="54"
                alt={cont.name}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
