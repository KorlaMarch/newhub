import React from 'react';
import PropTypes from 'prop-types';

const LinksBox = ({ links }) => {
  const list = links.map(element => (
    <a href={element.href} className="collection-item clearfix">
      <div>
        {element.text}
        <span className="secondary-content grey-text">
          {element.category}
        </span>
      </div>
    </a>
  ));

  return (
    <div className="mt-2 collection">
      {list}
    </div>
  );
};

LinksBox.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
};

LinksBox.defaultProps = {
  links: [],
};
export default LinksBox;
