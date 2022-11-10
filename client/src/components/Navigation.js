import React from 'react';
import { Link } from 'react-router-dom';
import { categoryToIdsMap } from '../constants';
import icon from './icon.png';

export default class Navigation extends React.Component {
  render() {
    return (
      <nav className="navContainer">
        <div className="navItems">
          {/* <h1 id="navTitle">Bookstore CMS</h1> */}
          <ul className="navPages">
            <li>
            {categoryToIdsMap.map(product => (<Link to={'categoryToIdsMap/' + product.id} />),)}
            </li>
            {/* <li>
              <Link to="/categories">Men</Link>
            </li>
            <li>
              <Link to="/products">Kids</Link>
            </li> */}
          </ul>
        </div>
        {/* <div className="icon">
          <img src={icon} alt="profile" />
        </div> */}
      </nav>
    );
  }
}

/* 

export default function AppNav() {
  return (
    <nav className="navContainer">
      <div className="navItems">
        <h1 id="navTitle">Bookstore CMS</h1>
        <ul className="navPages">
          <li><Link to="/">Books</Link></li>
          <li><Link to="/categories">Categories</Link></li>
        </ul>
      </div>
      <div className="icon">
        <img src={icon} alt="profile" />
      </div>
    </nav>
  );
}

*/
