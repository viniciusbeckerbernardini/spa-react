import React from 'react';
import { Link } from 'react-router-dom';

function TopMenu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">vinicius.tech</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"> </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Resumo</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/consultas" className="nav-link">Consultas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/faturamento" className="nav-link">Faturamento</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default TopMenu;