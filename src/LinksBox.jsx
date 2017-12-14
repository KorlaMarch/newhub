import React from 'react';
import PropTypes from 'prop-types';

const LinksBox = ({ links }) => {
  if (links.length > 0) {
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
  }

  return (
    <div className="m-3 notfound-box">
      <i className="material-icons">error_outline</i> Oops! We can't find what you are looking for.
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
