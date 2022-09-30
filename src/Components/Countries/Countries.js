import React from 'react';
import './Countries.css';
import Load from '../Load/Load';
import { countriesFilter } from './useCountries.js';

export default function Country({ loading }) {
  return (
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
  );
}
