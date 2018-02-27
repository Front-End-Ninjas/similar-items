import React from 'react';
import ThumbnailView from './ThumbnailView';

const { data } = require('../../seedData/dataGenerator');

class SimilarListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      list: data,
      limit: 9,
    };
  }

  render() {
    return (
      <div className="list-container">
        <div className="page-container">
          <span>Page {this.state.page} of {this.state.limit}</span>
          <span> | </span>
          <span>Start Over</span>
        </div>
        <div className="carousel-container">
          <div className="left">LEFT BUTTON</div>
          <div className="thumbnail-container">
            {
              this.state.list.map(item => <ThumbnailView key={item.id} item={item} />)
            }
          </div>
          <div className="right">RIGHT BUTTON</div>
        </div>
      </div>
    );
  }
}

export default SimilarListView;
