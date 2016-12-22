'use strict';

import React from 'react';
import $ from 'jquery';
import Styles from '../styles/styles.css';

export default class PopularMovies extends React.Component {

  constructor(props) {
    super(props);
    //this.thumbnailMouseOver = this.thumbnailMouseOver.bind(this);
  }

  _thumbnailMouseOver = (e) => {
    $(e.target).find('.movie-thumbnail-title').removeClass('hide');
  }

  _thumbnailMouseLeave = (e) => {
    $(e.target).find('.movie-thumbnail-title').addClass('hide');
  }
  render() {

    const Styles = {
      rowStyles: {
        marginBottom: '10px'
      }
    };

    let movies = this.props.details.map( (m,i) => {

      const posterUrl = 'http://image.tmdb.org/t/p/w185//' + m.poster_path,
          altImage = m.title  + " Image",
          movieTitle = m.title;

      return (
        <div key={ i } className="col-xs-12 col-sm-4 col-md-3">
          <div onMouseOver={ this._thumbnailMouseOver.bind(this) }
              onMouseLeave={ this._thumbnailMouseLeave.bind(this) } 
              className="movie-thumbnail" style={ Styles.rowStyles }>
            <img src={ posterUrl } alt= { altImage } width="280" height="400" />
            <h3 className="movie-thumbnail-title hide">{ movieTitle }</h3>
        </div>
        </div>
        
      );
    });

    return (
      <section className="container">
        <div className="row">
          { movies }
        </div>
      </section>
    );
  }
}
