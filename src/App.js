import './App.css';

function App({ countries, continent, setContinent, continents, query, setQuery }) {
  const countriesFilter = () => {
    const countriesFilterii = countries.filter(
      (cont) =>
        (continent === 'all' ? true : cont.continent === continent) &&
        cont.name.toLowerCase().includes(query)
    );
    return countriesFilterii;
  };
  countriesFilter();

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
    </div>
  );
}

export default App;
