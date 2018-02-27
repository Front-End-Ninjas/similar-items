import React from 'react';
import itemType from './type/item';

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
  item: itemType.isRequired,
};

export default ThumbnailView;
