import React from 'react';

import classes from './Nav.module.css'
import {Link} from "react-router-dom";

const Nav = (props) => (
    <header>
        <a className={classes.Title} href="/">Anime<strong>Base</strong></a>
        <nav>
            <ul className={classes.NavLinks}>
                <li><Link to="/view">View</Link></li>
                <li><Link to="/top">Top</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    </header>
);

export default Nav;
