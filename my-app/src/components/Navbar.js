import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link, NavLink} from 'react-router-dom';


export default function Navbar(props) {
    const [activeSection, setActiveSection] = useState('');

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink className="nav-link" exact activeClassName="active" onClick={() => setActiveSection('')} aria-current="page" to="/">{props.navBtn1}</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link about-link" activeClassName="active" onClick={() => setActiveSection('about')} to="/about">{props.navBtn2}</NavLink>
                </li>
            </ul>
            <button onClick={props.HandleToggle} className={`btn btn-${props.ToggleBtn} btn-sm`}>{props.text}</button>
            </div>
        </div>
    </nav>

  )
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired, // The isRequired means the title field is mandatory to be filled.
    navBtn1: PropTypes.string,
    navBtn2: PropTypes.string
}

Navbar.defaultProps = {
    title : "default title here",
    navBtn1: "Home"
}