import React from 'react';
import { useCountries } from '../../../hooks/useCountries';
import Country from '../../Country/Country';
import Loader from '../../Loader/Loader';

import './Home.css';

export default function Countries() {

  const {
    filterCountries,
    continent,
    setContinent,
    error,
    query,
    setQuery,
    loading
  } = useCountries();

  return (
    <section className="countries-container">
      <input
        type="text"
        placeholder="Search Countries..."
        value={ query }
        onChange={ (e) => setQuery(e.target.value.toLowerCase()) }
      />
      <select
        value={ continent }
        onChange={ (e) => {
          setContinent(e.target.value);
        } }
      >
        <option value="all">All Countries</option>
        <option value="Africa">Africa</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
      </select>
      <p className="error">{ error }</p>
      <main>
        { loading && <Loader /> }
        {
          !loading &&
          filterCountries().map((country) => <Country key={ country.id } { ...country } />)
        }
      </main>
    </section>
  )