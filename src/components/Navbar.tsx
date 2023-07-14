import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <header className="App-header">
            <div className="navbar" >
                <div className="navbar-title">
                    <h2 className="navbar-title-text">Random User Generator</h2>
                </div>
                <div className="navbar-items">
                    <ul className="navbar-items-list">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="https://waldocandaza.vercel.app/">Author</a>
                        </li>
                        <li>
                            <a className="github-link" href="https://github.com/wreckingralph06/zeta04-user-randomizer">
                                <img className="github-icon" src="/icons8-github.svg"></img>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
