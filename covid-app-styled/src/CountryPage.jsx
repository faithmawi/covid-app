import { useParams } from "react-router-dom";
import CovidCountry from "./CovidCountry";

const CountryPage = () => {
  const { country } = useParams();
  return (
    <>
      <h2>Country: {country} </h2>
      <CovidCountry country={country} />
    </>
  );
};

export default CountryPage;
