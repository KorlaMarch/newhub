import React from 'react';
import PropTypes from 'prop-types';

const CategoryTile = ({ category, onClick, highlight }) => {
  let classN = '';
  if (highlight) {
    classN = 'catTile col-11 col-md-6 col-lg-5 btn waves-effect waves-light highlight';
  } else {
    classN = 'catTile col-11 col-md-5 col-lg-3 btn waves-effect waves-light';
  }
  return (
    <button
      className={classN}
      onClick={() => { onClick(category.name); }}
    >
      {category.name}
    </button>
  );
};

CategoryTile.propTypes = {
  category: PropTypes.objectOf(PropTypes.string).isRequired,
  onClick: PropTypes.func,
  highlight: PropTypes.bool,
};

CategoryTile.defaultProps = {
  onClick: () => {},
  highlight: false,
};

export default CategoryTile;
