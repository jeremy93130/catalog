import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import films from "../films.json"
import List from './List';

class Home extends Component {
    constructor() {
        super()

        this.state = {
            films: []
        }
    }
    render() {
        return (
            
            <div className="container">
                {films.map(film => (
                    <>
                        <div className="flex">
                            <div className="img" style={{ backgroundImage: `url(${film.image})` }}>
                            </div>
                            <div className="titles">
                                <h2><Link to={`/list/${film.id}`}> {film.title} </Link> </h2>
                            </div>
                        </div>
                    </>
                )
                )}
            </div>
        );
    }
}

export default Home;