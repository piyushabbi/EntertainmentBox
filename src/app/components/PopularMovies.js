'use strict';

import React from 'react';

export default class PopularMovies extends React.Component {

    render() {

        const Styles = {
            rowStyles: {
                marginBottom: '10px'
            },
            detailsContainer: {
                marginLeft: '10px'
            },
            overView: {
                textAlign: 'justify',
                fontSize: '13px'
            }
        };

        let movies = this.props.details.map( (m,i) => {
            var posterUrl = 'http://image.tmdb.org/t/p/w185//' + m.poster_path;

            return (
                <div key={ i } className="col-sm-6">
                    <div className="col-xs-4" style={ Styles.rowStyles }>
                        <img src={ posterUrl }  />
                    </div>
                    <div className="col-xs-8">
                        <div style={ Styles.detailsContainer }>
                            <h4>{ m.title }</h4>

                        </div>
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