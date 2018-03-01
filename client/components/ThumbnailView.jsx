import React from 'react';
import itemType from './type/item';
import fetching from './type/fetch';

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
      <span className="rating" id={item.id}>
        <img
          className="rating"
          src={`http://localhost:3000/assets/stars/${item.rating}.png`}
          alt="thumbnail"
          id={item.id}
        />
      </span>
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
  fetch: fetching.isRequired,
};

export default ThumbnailView;
