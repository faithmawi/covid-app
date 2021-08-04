const fetchJSON = async url => {
  const result = await fetch(url);
  return result.json();
};

export const fetchCountries = async () => {
  const countriesData = await fetchJSON(`https://api.covid19api.com/countries`);
  return countriesData.map(i => i.Slug).sort();
};

export const fetchConfirmedCases = async country => {
  const url = `https://api.covid19api.com/total/country/${country}/status/confirmed`;
  const casesData = await fetchJSON(url);
  const latestCases = casesData[casesData.length - 1];
  return latestCases ? latestCases.Cases : 0;
};
