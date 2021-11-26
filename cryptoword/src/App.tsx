import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import {Box} from '@material-ui/core';
import Coin from "./components/coin";

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="Title">CryptoWord</h1>
            </header>

            <div className="Container">
                <Coin/>
                <Coin/>
                <Coin/>
            </div>
        </div>
    );
}

