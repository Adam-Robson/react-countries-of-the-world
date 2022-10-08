import React from 'react';
import './Country.css';
import Load from '../Load/Load';
import { countriesFilter } from '../Countries/Countries';

export default function Country({ loading }) {
  return (
    <div className="allCountries">
      {loading && <Load />}
      {!loading &&
        countriesFilter().map((singleContinent) => (
          <div className="countryContainer" key={singleContinent.name}>
            <h3>{singleContinent.name}</h3>
            <img
              src={`https://flagcdn.com/72x54/${singleContinent.iso2.toLowerCase()}.png`}
              width="72"
              height="54"
              alt={singleContinent.name}
            />
          </div>
        ))}
    </div>
  );
}
