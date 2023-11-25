import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">{props.navBtn1}</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">{props.navBtn2}</Link>
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