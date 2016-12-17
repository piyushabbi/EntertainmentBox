import React, { Component } from 'react';

import Header from './Header';

export default class Container extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
};