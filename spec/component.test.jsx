import React from 'react';
import { shallow } from 'enzyme';
import SLV from '../client/components/SimilarListView';
import TV from '../client/components/ThumbnailView';
import test from './testData';


describe('Testing the SimilarListView', () => {
  const similar = shallow(<SLV />);
  similar.setState({
    page: 0,
    list: test.slice(0, 7),
    total: test,
    limit: Math.ceil(test.length / 7),
  });

  it('Should be defined', () => expect(SLV).toBeDefined());

  it('Should have render "ThumbnailView"', () => {
    expect(similar.find('ThumbnailView').length).toBe(7);
  });

  it('Should have appropriate containers', () => {
    expect(similar.find('.page-container').length).toBe(1);
    expect(similar.find('.carousel-container').length).toBe(1);
    expect(similar.find('.thumbnail-container').length).toBe(1);
  });

  it('Should have a working handleClick function', () => {
    similar.find('.right').simulate('click', { target: 'right' });
    similar.find('.right').simulate('click', { target: 'start-over' });
    expect(similar.state('page')).toBe(0);
  });

  it('Should have a working fetch function', () => {
    similar.instance().fetch = jest.fn();
    similar.update();
    similar.instance().fetch({ target: { id: 1 } });
    expect(similar.instance().fetch).toBeCalledWith({ target: { id: 1 } });
  });
});

describe('Testing the ThumbnailView', () => {
  const thumbnail = shallow(<TV item={test[0]} key={test[0].id} fetch={item => item} />);

  it('Should be defined', () => expect(TV).toBeDefined());

  it('Should have rendered the item information', () => {
    expect(thumbnail.find('.title').text()).toBe('Product 22 Clothing');
    expect(thumbnail.find('.reviews').text()).toBe('<Badge />');
    expect(thumbnail.find('.price').text()).toBe('$266.57');
  });

  it('Should render an image if prime is true', () => {
    expect(thumbnail.find('img.prime-logo').length).toBe(1);
  });

  it('Should not render an image if prime is false', () => {
    const wrapper = shallow(<TV item={test[6]} key={test[6].id} fetch={item => item} />);
    expect(wrapper.find('img.prime-logo').length).toBe(0);
  });
});
