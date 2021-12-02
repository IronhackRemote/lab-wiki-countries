import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CountriesList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getData() {
      let response = await axios.get('https://restcountries.com/v3.1/all');
      setCountries(response.data);
    }

    getData();
  }, []);

  if (!countries.length) {
    return <p>Please, wait. The Page is loading </p>;
  }

  return (
    <div>
      <h1>Countries</h1>
      {countries.map((elem, index) => {
        return (
          <div key={index}>
            <Link to={`/${elem.cca3}`}>{elem.name.common}</Link>
            <br />
            <img className="flag" src={elem.flags.svg} alt="flag" />
          </div>
        );
      })}
    </div>
  );
}
