import React from 'react';
import { Link } from 'react-router';

import $ from '../../../node_modules/jquery/dist/jquery.min.js';
import Bootstrap from '../../../node_modules/bootstrap/dist/js/bootstrap.js';

export default class Header extends React.Component {
  render () {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to='/'>EtBox</Link>
            </div>

            <div id="navbar" className="navbar-collapse collapse" aria-expanded="false">
              <ul className="nav navbar-nav">
                <li><Link to='/popular'>Popular</Link></li>
                <li><Link to='/search'>Search</Link></li>
                <li><Link to='/about'>About</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="active"><Link to='/'>Piyush <span className="sr-only">(current)</span></Link></li>
              </ul>
            </div>

          </div>
        </nav>
     
        <Link to='/'>Home</Link>&nbsp;
        <Link to='/popular'>Popular</Link>
        <Link to='/search'>Search</Link>
        <Link to='/about'>About</Link>
      </div>
    );
  }
};