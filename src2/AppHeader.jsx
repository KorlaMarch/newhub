import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const AppHeader = ({ activeIndex }) => {
  const tabClass = ['nav-link', 'nav-link'];
  tabClass[activeIndex] = 'nav-link active';

  return (
    <nav className="bg-light text-center">
      <h2>The Hub</h2>
      <ul className="nav nav-pills nav-justified">
        <li className="nav-item">
          <Link
            className={tabClass[0]}
            to="/student"
          >
            Student
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={tabClass[1]}
            to="/faculty"
          >
            Faculty
          </Link>
        </li>
      </ul>
    </nav>
  );
};

AppHeader.propTypes = {
  activeIndex: PropTypes.number,
};

AppHeader.defaultProps = {
  activeIndex: 0,
};

export default AppHeader;
