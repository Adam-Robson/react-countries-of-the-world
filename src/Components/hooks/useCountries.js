import { useState, useEffect } from 'react-router-dom';
import { getCountries } from './services/getCountries';

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('all');
  const [continents, setContinents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await getCountries();
        setCountries(response);
        const continentsEach = [...new Set(response.map((cont) => cont.continent))];
        setContinents(continentsEach);
        setTimeout(() => setLoading(false), 2500);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchCountries();
  }, []);
  return {
    countries,
    continent,
    setContinent,
    continents,
    setContinents,
    error,
    query,
    setQuery,
    loading,
  };
}
