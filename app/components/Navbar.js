import React from 'react';
import { Link } from 'react-router-dom';

//displays the navbar on all screens

const Navbar = (props) => {
    const navbar = props.navbar

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">Pill Planner</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="/medicine">Add Medicine <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="/schedule">Schedule</a>
                        <a className="nav-item nav-link disabled">Doctors</a>
                        <a className="nav-item nav-link disabled">Place Holder</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;
