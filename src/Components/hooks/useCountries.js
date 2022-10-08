import { useState, useEffect } from 'react-router-dom';
import { fetchCountries } from './services/getCountries';

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('all');
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
 

  useEffect(() => {
    async function getCountries() {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (e) {
        setError(e.message.toUpperCase());
      }
    }
    getCountries();
  }, []);

  return {
    continent,
    setContinent,
    error,
    query,
    setQuery,
    loading,
  };
}
