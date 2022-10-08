import React from 'react';
import './Country.css';

export default function Country({ name, iso2 }) {
  return (
    <div className="country">
      <div className="country-name">{name}</div>
      <img src={`https://flagcdn.com/144x108/${iso2.toLowerCase()}.png`} height="64" alt={name} />
    </div>
  );
}
