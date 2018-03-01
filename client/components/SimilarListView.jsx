import React from 'react';
import ThumbnailView from './ThumbnailView';
import helper from '../../client_helpers/helper';

const { data } = require('../../seedData/dataGenerator');

class SimilarListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      list: [],
      total: [],
      limit: 1,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      list: data.slice(0, 7),
      total: data,
      limit: Math.ceil(data.length / 7),
    });
  }

  handleClick(event) {
    const { page, total, limit } = this.state;
    const name = event.target.className;
    const newPage = helper.page(name, page, limit);

    if (newPage !== undefined) {
      this.setState(helper.shift(newPage, total));
    }
  }

  render() {
    return (
      <div className="list-container">
        <div className="page-container">
          {
            this.state.page === 0 ? null :
              <div className="start-over" onClick={this.handleClick}>Start Over</div>
          }
          <div className="page">Page {this.state.page + 1} of {this.state.limit}</div>
        </div>
        <div className="carousel-container">
          <div className="button">
            <img
              src="http://localhost:3000/assets/foundation/left.png"
              alt="left-button"
              className="left"
              onClick={this.handleClick}
            />
          </div>
          <div className="thumbnail-list">
            <div className="thumbnail-container">
              {
                this.state.list.length === 0 ?
                  <img src="http://localhost:3000/assets/foundation/loading.gif" alt="loading" className="loading" />
                  : this.state.list.map(item => <ThumbnailView key={item.id} item={item} />)
              }
            </div>
          </div>
          <div className="button">
            <img
              src="http://localhost:3000/assets/foundation/right.png"
              alt="right-button"
              className="right"
              onClick={this.handleClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SimilarListView;
