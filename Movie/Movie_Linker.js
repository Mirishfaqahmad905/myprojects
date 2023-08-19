import React from 'react';
import { Link } from 'react-router-dom';
import './Routing.css';

const NavigationBar = () => {
  return (
    <div className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-item'>
          <Link to='/Home' className='navbar-link'>
            Home
          </Link>
        </li>
        <li className='navbar-item'>
          <Link to='/TV' className='navbar-link'>
            TV
          </Link>
        </li>
        <li className='navbar-item'>
          <Link to='/TvShow' className='navbar-link'>
            TV Show
          </Link>
        </li>
        <li className='navbar-item'>
          <Link to='/Movie' className='navbar-link'>
            Movie Show
          </Link>
        </li>
        <li className='navbar-item'>
          <Link to='/Top' className='navbar-link'>
            Top Ten
          </Link>
        </li>
        <li className='navbar-item'>
          <Link to='/Searies' className='navbar-link'>
            Series
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
