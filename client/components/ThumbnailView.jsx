import React from 'react';
import { Tooltip, OverlayTrigger, Badge } from 'react-bootstrap';
import itemType from './type/item';
import fetching from './type/fetch';

const ThumbnailView = ({ item, fetch }) => {
  const tooltip = (
    <Tooltip id={item.id}>
      {item.title}
    </Tooltip>
  );

  const host = 'https://s3-us-west-1.amazonaws.com/nile-image-assets';

  return (
    <OverlayTrigger
      placement="bottom"
      delayShow={1000}
      overlay={tooltip}
    >
      <div className="thumbnail" onClick={fetch} id={item.id}>
        <img
          className="image"
          src={`${host}${item.relativePath}.jpg`}
          alt="thumbnail"
          id={item.id}
        />
        <div className="title" id={item.id}>
          {
            item.title.length >= 83 ? item.title.slice(0, 83) : item.title
          }
        </div>
        <div className="ratings-container" id={item.id}>
          <span className="rating" id={item.id}>
            <img
              className="rating"
              src={`${host}/${item.rating}.png`}
              alt="rating"
              id={item.id}
            />
          </span>
          <span className="reviews" id={item.id}>
            <Badge id={item.id}>{item.reviews}</Badge>
          </span>
        </div>
        <div className="price-prime-container" id={item.id}>
          <span className="price" id={item.id}>{item.price}</span>
          <span className="prime" id={item.id}>
            {
              item.prime ? <img
                src={`${host}/prime.png`}
                alt="rating"
                className="prime-logo"
                id={item.id}
              /> : null
            }
          </span>
        </div>
      </div>
    </OverlayTrigger>
  );
};

ThumbnailView.propTypes = {
  item: itemType.isRequired,
  fetch: fetching.isRequired,
};

export default ThumbnailView;
