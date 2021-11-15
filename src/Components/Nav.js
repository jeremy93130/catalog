import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/List">Liste</Link>
                </li>
            </ul>
        )
    }
}

export default Nav;