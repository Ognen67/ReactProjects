import React, {useEffect, useState} from 'react';
import axios from 'axios'
import classes from './Home.module.css'
import CountryCard from "../CountryCard/CountryCard";

const Home = (props) => {

    const [data, setData] = useState({})

    const fetchData = async () => {
        axios.get('https://api.covid19api.com/summary')
            .then(res => setData(res.data))
    }

    useEffect(() => {
        fetchData().then(r => console.log(r))
        console.log(data)
    }, [])


    // const countries = data.Countries
    //     .map(country =>
    //         <CountryCard
    //             name={country.Country}
    //             totalConfirmed={country.TotalConfirmed}
    //             totalDeaths={country.TotalDeaths}
    //             totalRecovered={country.TotalRecovered}
    //             key={country.id}
    //
    //         />
    //     )



    return (
        <div className={classes.Home}>
            <a href="https://www.w3schools.com/" target="_top">Visit W3Schools.com!</a>
        </div>
    )
}


export default Home;
