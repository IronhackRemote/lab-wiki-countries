import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

export default function CountryDetails(props) {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha/${id}`
      );

      const country = response.data[0];
      setDetail(country);
    }
    getData();
  }, [id]);

  if (!detail) {
    return <p>Please, wait a bit more. The Page is loading </p>;
  }

  return (
    <div>
      <h4>{detail.name.common}</h4>
      <img src={detail.flags.svg} alt="Country" />
      <table className="row">
        <tr>
          <td className="col">
            <h5>Capital: {detail.capital}</h5>
          </td>
        </tr>
        <hr />
        <tr>
          <td className="col">
            <h5>Area: {detail.area}</h5>
          </td>
        </tr>
        <tr>
          <td>
            <hr />
            <h5>Borders: {detail.borders}</h5>
          </td>
        </tr>
      </table>
    </div>
  );
}
