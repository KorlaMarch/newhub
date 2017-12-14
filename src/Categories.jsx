import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import CategoryTile from './CategoryTile';
import CategoriesList from './CategoriesList';

const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={200}
    classNames="fade"
  >
    {children}
  </CSSTransition>
);

const Categories = ({ isStudent,selected,onChange }) => {

  const tiles = CategoriesList.map((element) => {
    if (element.for=='both'||
    (element.for=='student'&&isStudent)||
    (element.for=='adults'&&!isStudent)) {
      return (
        <Fade key={element.id}>
          <CategoryTile
            category={element}
            highlight={selected === element.name}
            isStudent={isStudent}
            onClick={
              (name) => {
                if (name === selected) {
                  onChange('');
                } else {
                  onChange(name);
                }
              }
            }
          />
        </Fade>
      );
    }
  });
  return (
    <div>
      <TransitionGroup className="categories row justify-content-center">
        {tiles}
      </TransitionGroup>
    </div>
  );
};

Categories.propTypes = {
  isStudent: PropTypes.bool,
  selected: PropTypes.string,
  onChange: PropTypes.func,
};

Categories.defaultProps = {
  isStudent: true,
  selected: '',
  onChange: () => {},
};

export default Categories;
