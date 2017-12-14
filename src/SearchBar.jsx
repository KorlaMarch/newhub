import React from 'react';
import PropTypes from 'prop-types';
import { Autocomplete } from 'react-materialize';

import Tags from './Tags';

const SearchBar = ({ text, onChange, isStudent }) => {
  const autodata = {};
  if (isStudent) {
    Tags.students.forEach((element) => {
      autodata[element] = null;
    });
  } else {
    Tags.adults.forEach((element) => {
      autodata[element] = null;
    });
  }

  return (
    <Autocomplete
      title="Search for..."
      data={autodata}
      limit="5"
      minLength="1"
      value={text}
      onChange={onChange}
    />
  );
};

SearchBar.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func,
  isStudent: PropTypes.bool,
};

SearchBar.defaultProps = {
  text: '',
  onChange: () => {},
  isStudent: true,
};

export default SearchBar;
