import React from 'react';

const CountrySelect = ({countries, onCountrySelected}) => {

    const handleCountrySelected = (alpha3Code) => {
      onCountrySelected(alpha3Code)
    }

    const options = countries.map(country => {
        return <option data-testid="country-option" value={country.alpha3Code} key={country.alpha3Code}>{country.name}</option>
    })

  return (
  <select data-testid="country-selector" id="country-selector" onChange={handleCountrySelected} defaultValue="default">
  <option data-testid="country-option" disabled value="default">Choose a country...</option>
  {options}
</select>
)
}

export default CountrySelect;