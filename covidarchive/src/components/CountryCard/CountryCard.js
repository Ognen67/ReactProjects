import React from 'react';

import classes from './CountryCard.module.css'

const CountryCard = (props) => {
    return (
        <div className={classes.CountryCard}>
            <h1>{props.name}</h1>
            <p>Total Confirmed: {props.totalConfirmed}</p>
            <p>Total Deaths: {props.totalDeaths}</p>
            <p>Total Recovered: {props.totalRecovered}</p>
        </div>
    );
};

export default CountryCard;
