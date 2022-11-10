import React from 'react';
import { Link } from 'react-router-dom';
import { categoryToIdsMap } from '../constants';

export default class Navigation extends React.Component {
  render() {
    return (
      <nav className="navContainer">
        <div className="navItems">
          <ul className="navPages">
            <li>
              {Object.keys(categoryToIdsMap).map((categoryId) => (
                <Link key={categoryId} to={'/' + categoryId}>
                  {categoryId}
                </Link>
              ))}
            </li>
          </ul>
        </div>
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
