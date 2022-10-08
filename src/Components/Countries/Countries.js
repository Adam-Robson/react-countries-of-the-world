import './Countries.css';
import { useState } from 'react';
function Countries(countries, continents) {
  const [continent, setContinent] = useState([]);
  const [query, setQuery] = useState([]);

  const countriesFilter = () => {
    const dataSet = countries.filter(
      (data) =>
        (continent === 'all' ? true : data.continent === continent) &&
        data.name.toLowerCase().includes(query)
    );
    return dataSet;
  };

  countriesFilter();

  return (
    <div className="Countries">
      <h2>Earth Countries!</h2>
      <div className="search-dropdown">
        <input
          type="text"
          value={query}
          onChange={(event) => {
            return setQuery(event.target.value.toLowerCase());
          }}
        />
        <select
          className="continent-dropdown"
          onChange={(event) => setContinent(event.target.value)}
        >
          <option value="all">all</option>
          {!!continents.length &&
            continents.map(
              (resultContinent) =>
                !!resultContinent && (
                  <option key={resultContinent} value={resultContinent}>
                    {resultContinent}
                  </option>
                )
            )}
        </select>
      </div>
    </div>
  );
}

export default Countries;
