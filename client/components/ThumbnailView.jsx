import React from 'react';
import itemType from './type/item';

const ThumbnailView = ({ item, fetch }) => (
  <div className="thumbnail" onClick={fetch} id={item.id}>
    <img
      className="image"
      src={`http://localhost:3000${item.relativePath}`}
      alt="thumbnail"
      id={item.id}
    />
    <div className="title" id={item.id}>
      {item.title}
    </div>
    <div className="ratings-container" id={item.id}>
      <span className="rating" id={item.id}>{item.rating}</span>
      <span> || </span>
      <span className="reviews" id={item.id}>{item.reviews}</span>
    </div>
    <div className="price-prime-container" id={item.id}>
      <span className="price" id={item.id}>{item.price}</span>
      <span className="prime" id={item.id}>
        {
          item.prime ? <img src="http://localhost:3000/assets/prime.png" alt="rating" className="prime-logo"/> : null
        }
      </span>
    </div>
  </div>
);

ThumbnailView.propTypes = {
  item: itemType.isRequired,
  fetch: PropType.func.isRequired,
};

export default ThumbnailView;
