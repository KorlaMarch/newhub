import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CategoriesList from './CategoriesList';

const LinksList = ({ id, links }) => {
  const catName = CategoriesList.find(element => element.id === id);
  if (catName) {
    const eleLinks = [];
    links.forEach( (element) => {
      if (element.category === catName.name) {
        eleLinks.push(
          <div>
            <a href={element.href}>
              {element.text}
            </a>
          </div>
        );
      }
    });
    return (
      <div>
        {eleLinks}
      </div>
    );
  }
  return (
    <div>
      Error 404: Page not found
    </div>
  );
};

LinksList.propTypes = {
  id: PropTypes.string,
};

LinksList.defaultProps = {
  id: 0,
};
export default LinksList;
