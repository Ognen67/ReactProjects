import React from 'react';

import classes from './Navigation.module.css'
import {Link} from "react-router-dom";

const Navigation = (props) => (
    <header className={classes.Header}>
        <Link className={classes.Title} to="/home"><h1 >CovidArchive</h1></Link>
        <nav>
        <ul className={classes.NavArea}>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/information">Information</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
        </nav>
    </header>
);

export default Navigation;
