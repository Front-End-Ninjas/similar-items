import React from 'react';
import { Button } from 'react-bootstrap';
import { number } from 'prop-types';
import ThumbnailView from './ThumbnailView';
import helper from '../../client_helpers/helper';
import search from '../api_request/api';

class SimilarListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      list: [],
      total: [],
      limit: 1,
    };
    this.fetch = this.fetch.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    search(id).then(result => this.setState(result));
  }

  handleClick(event) {
    const { page, total, limit } = this.state;
    const { id } = event.target;
    const newPage = helper.page(id, page, limit);

    if (newPage !== undefined) {
      this.setState(helper.shift(newPage, total));
    }
  }

  fetch(event) {
    const { id } = event.target;
    search(id).then(result => this.setState(result));
  }

  render() {
    return (
      <div className="list-container">
        <div className="sponsored">
          Sponsored products related to this item
        </div>
        <div className="page-container">
          {
            this.state.page === 0 ? null :
            <div className="divider">|
              <span
                className="start-over"
                id="start-over"
                onClick={this.handleClick}
              >
                  Start Over
              </span>
            </div>
          }
          <div className="page">Page {this.state.page + 1} of {this.state.limit}</div>
        </div>
        <div className="carousel-container">
          <Button className="button" id="left" onClick={this.handleClick}>
            <img
              src="https://s3-us-west-1.amazonaws.com/nile-image-assets/left.png"
              alt="left-button"
              className="left"
              id="left"
              onClick={this.handleClick}
            />
          </Button>
          <div className="thumbnail-list">
            <div className="thumbnail-container">
              {
                this.state.list.length === 0 ?
                  <img src="https://s3-us-west-1.amazonaws.com/nile-image-assets/loading.gif" alt="loading" className="loading" /> :
                  this.state.list.map(item => (
                    <ThumbnailView
                      key={item.id}
                      item={item}
                      fetch={this.fetch}
                    />
                  ))
              }
            </div>
          </div>
          <Button className="button" id="right" onClick={this.handleClick}>
            <img
              src="https://s3-us-west-1.amazonaws.com/nile-image-assets/right.png"
              alt="right-button"
              className="right"
              id="right"
              onClick={this.handleClick}
            />
          </Button>
        </div>
      </div>
    );
  }
}

SimilarListView.propTypes = {
  id: number.isRequired,
};

export default SimilarListView;
