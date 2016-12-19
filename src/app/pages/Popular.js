import React from  'react';

import PopularMovies from '../components/PopularMovies';

export class Popular extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        popularMovies: []
    }
  }

  componentDidMount() {
    const config = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=43d02ac6987f3a4aa40d182718ab044f",
      "method": "GET",
      "headers": {},
      "data": {}
    };
    fetch(config.url).then(response => {
      Promise.resolve(response.json()).then(response => {
          console.log(response);
          this.setState({
              popularMovies: response.results
          });
      })
    })
  }

  render() {
    return (
      <div>
          <PopularMovies details={ this.state.popularMovies } />
      </div>
    );
  }
}
