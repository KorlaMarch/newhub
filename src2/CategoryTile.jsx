import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const CategoryTile = ({ img, name, url, id }) => {
  return (
    <Link to={`${url}/${id}`}>
      <div>
        <img src={`img/${img}`} alt="" />
        {name}
      </div>
    </Link>
  );
};

CategoryTile.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  id: PropTypes.string,
};

CategoryTile.defaultProps = {
  img: '',
  name: '',
  url: '',
  id: '',
};

export default CategoryTile;
