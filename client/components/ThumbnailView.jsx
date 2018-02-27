import React from 'react';
import PropType from 'prop-types';

const ThumbnailView = ({ item }) => (
  <div className="thumbnail">
    <img className="image" src={`http://localhost:3000${item.relativePath}`} alt="thumbnail" />
    <div className="title">{item.title}</div>
    <div className="ratings-container">
      <span className="rating">{item.rating}</span>
      <span> || </span>
      <span className="reviews">{item.reviews}</span>
    </div>
    <div className="price-prime-container">
      <span className="price">{item.price}</span>
      <span className="prime">
        {
          item.prime ? ' || PRIME' : null
        }
      </span>
    </div>
  </div>
);

ThumbnailView.propTypes = {
  item: PropType.shape({
    id: PropType.number.isRequired,
    title: PropType.string.isRequired,
    category: PropType.string.isRequired,
    rating: PropType.number.isRequired,
    reviews: PropType.number.isRequired,
    price: PropType.number.isRequired,
    prime: PropType.bool.isRequired,
  }).isRequired,
};

export default ThumbnailView;
