import React from 'react';
import PropType from 'prop-types';

const ThumbnailView = ({ item }) => (
  <div className="thumbnail">
    <div className="image">Image Goes Here</div>
    <div className="title">{item.title}</div>
    <div className="ratings-container">
      <span className="rating">RATING: 12345 </span>
      <span className="reviews">REVIEWS GO HERE</span>
    </div>
    <div className="price-prime-container">
      <span className="price">PRICE GOES HERE</span>
      <span className="prime">PRIME GOES HERE</span>
    </div>
  </div>
);

ThumbnailView.propTypes = {
  item: PropType.shape({
    id: PropType.number.isRequired,
    title: PropType.string.isRequired,
    category: PropType.string.isRequired,
  }).isRequired,
};

export default ThumbnailView;
