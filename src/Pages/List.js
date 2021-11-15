import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import films from "../films.json"

class List extends Component {
    render() {
        const { id } = this.props.match.params
        const filteredFilms = films.filter(film => film.id === Number(id))
        return (
            <div className="listed">
                {filteredFilms.map(film => (
                   <div className="flex">
                   <div className="img" style={{ backgroundImage: `url(${film.image})` }}>
                   </div>
                   <div className="titles">
                       <h2><Link to={`/list/${film.id}`}> {film.title} </Link> </h2>
                   </div>
               </div>
                ))}
            </div>
        );
    }
}

export default List;