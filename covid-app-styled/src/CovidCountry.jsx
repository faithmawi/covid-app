import { useState, useEffect } from "react";
import { fetchCountries, fetchConfirmedCases } from "./api";

const CovidCountry = ({ country }) => {
  const [countries, setCountries] = useState([]);
  const [confirmedCases, setConfirmedCases] = useState([]);

  useEffect(() => {
    fetchCountries().then(countries => {
      setCountries(countries);
      handleSelectCountry(country || countries[0]);
    });
  }, [country]);

  const handleSelectCountry = async country => {
    const cases = await fetchConfirmedCases(country);
    setConfirmedCases(cases);
  };

  return (
    <div className="app">
      <h1>C O V I D - 1 9 </h1>
      <p>Please select a country below:</p>
      <select onChange={event => handleSelectCountry(event.target.value)}>
        {countries.map(slug => (
          <option key={slug} value={slug} selected={country === slug}>
            {slug.toUpperCase()}
          </option>
        ))}
      </select>
      <p className="result">Confirmed Cases: {confirmedCases}</p>
    </div>
  );
};

export default CovidCountry;
