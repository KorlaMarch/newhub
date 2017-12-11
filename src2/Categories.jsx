import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CategoryTile from './CategoryTile';
import categoriesList from './CategoriesList';


class Categories extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tiles = categoriesList.map( (element) => {
      if(element.for=='both'||
      (element.for=='student'&&this.props.isStudent)||
      (element.for=='adults'&&!this.props.isStudent)){
        return (
          <CategoryTile
            img={element.img}
            name={element.name}
            url={this.props.url}
            key={element.id}
            id={element.id}
          />
        );
      }
    });
    return (
      <main className="bg-light text-center">
        {tiles}
      </main>
    );
  }
}

Categories.propTypes = {
  isStudent: PropTypes.bool,
};

Categories.defaultProps = {
  isStudent: true,
};

export default Categories;
