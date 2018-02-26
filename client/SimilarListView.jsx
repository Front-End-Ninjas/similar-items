import React from 'react';
import ThumbnailView from './ThumbnailView';
import seed from '../seedData/seed.json';

class SimilarListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      list: seed,
      limit: 9,
    };
  }

  leftClick() {

  }

  rightClick() {

  }

  render() {
    console.log(this.state.list);

    return (
      <div className="list-container">
        <div>
          <span>Page {this.state.page} of {this.state.limit}</span>
          <span> | </span>
          <span>Start Over</span>
        </div>
        <div>
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
