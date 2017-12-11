import React from 'react';
import PropTypes from 'prop-types';

const AppHeader = ({ isStudent, onSwitchClick }) => {
  return (
    <header>
      <h2 className="row justify-content-center">NMH Hub</h2>
      <div className="row switch justify-content-center">
        <label>
          Student
          <input type="checkbox" onClick={onSwitchClick} checked={!isStudent} />
          <span className="lever" />
          Adults
        </label>
      </div>
    </header>
  );
};

AppHeader.propTypes = {
  isStudent: PropTypes.bool,
  onSwitchClick: PropTypes.func,
};

AppHeader.defaultProps = {
  isStudent: true,
  onSwitchClick: () => {},
};

export default AppHeader;
