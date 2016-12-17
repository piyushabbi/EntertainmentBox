import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render () {
    return (
      <div>
        <Link to='/'>Home</Link>&nbsp;
        <Link to='/popular'>Popular</Link>
        <Link to='/search'>Search</Link>
        <Link to='/about'>About</Link>
      </div>
    );
  }
};