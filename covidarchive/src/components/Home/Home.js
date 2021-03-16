import React, {useEffect, useState} from 'react';
import axios from 'axios'
import classes from './Home.module.css'
import CountryCard from "../CountryCard/CountryCard";

const Home = (props) => {

    const [data, setData] = useState({})




    useEffect(() => {
        axios.get('https://api.covid19api.com/summary')
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
    }, [])

    const displayCountries = () => {
        console.log(data.Countries)
        console.log(data.Countries[0].Country)

    }

    const countries = data.Countries.map(country =>
        <CountryCard
            name={country.Country}
            totalConfirmed={country.TotalConfirmed}
            totalDeaths={country.TotalDeaths}
            totalRecovered={country.TotalRecovered}
        />

        )





    return (
        <div className={classes.Home}>
            {countries}
        </div>
    )
}


export default Home;
