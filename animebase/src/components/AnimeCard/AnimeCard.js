import React from 'react';

import classes from './AnimeCard.module.css'

const AnimeCard = (props) => (
    <div className={classes.Card}>
        <h1 className={classes.Title}><a href={props.href}><p>{props.title}</p></a></h1>
        <img className={classes.Img} src={props.img} alt={props.title}/>
        <p className={classes.Score}>Score: {props.score}, Rated: {props.rated}</p>
        <div className={classes.Synopsis}>
            <p className={classes.Score}>Synopsis: {props.synopsis}</p>

        </div>
    </div>
);

export default AnimeCard;
