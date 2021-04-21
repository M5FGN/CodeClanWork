import React, { useState, useEffect } from 'react';
import CountryDetail from '../components/CountryDetail'
import FavouriteListItem from '../components/FavouriteListItem'
import CountrySelect from '../components/CountrySelect';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountryAlpha3Code, setSelectedCountryAlpha3Code] = useState("");
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favouriteCountries, setFavouriteCountries] = useState([]);

    useEffect(() => {
        getCountries()
    }, []);

    useEffect(() => {
        let country = countries.find(country => country.alpha3Code === selectedCountryAlpha3Code)
        setSelectedCountry(country);
    }, [countries, selectedCountryAlpha3Code])

    const getCountries = () => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    }

    const handleCountrySelected = (event) => {
        setSelectedCountryAlpha3Code(event.target.value)
    }

    const handleAddToFavourite = () => {
        if (!favouriteCountries.includes(selectedCountry)) {
            setFavouriteCountries(prevArray => [...prevArray, selectedCountry])
        }
    }

    

    return (

        <div>
            <h2>Country Container</h2>
            <CountrySelect countries={countries} onCountrySelected={handleCountrySelected} />
            <CountryDetail country={selectedCountry}  />
            <button data-testid="favourite-button" id="favourite-button" onClick={handleAddToFavourite}>Add to Favourites</button>
            <FavouriteListItem favouriteCountries={favouriteCountries} />
        </div>
    );

}

export default Countries;