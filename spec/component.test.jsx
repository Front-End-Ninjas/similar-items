import React from 'react';
import { shallow, mount } from 'enzyme';
import { JSDOM } from 'jsdom';
import SLV from '../client/components/SimilarListView';
import TV from '../client/components/ThumbnailView';
import test from './testData';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

global.window = window;
global.document = window.document;


describe('Testing the SimilarListView', () => {
  const similar = mount(<SLV />);
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
    similar.find('.right').simulate('click', { target: { id: 'right' } });
    expect(similar.state('page')).toBe(1);
    similar.find('.right').simulate('click', { target: { id: 'right' } });
    expect(similar.state('page')).toBe(2);
    similar.find('.left').simulate('click', { target: { id: 'left' } });
    expect(similar.state('page')).toBe(1);
    similar.find('.start-over').simulate('click', { target: { id: 'start-over' } });
    expect(similar.state('page')).toBe(0);
  });

  it('Should have called fetch when thumbnail is clicked', () => {
    similar.instance().fetch = jest.fn();
    similar.setState({
      page: 0,
      list: [test[0]],
      total: test,
      limit: Math.ceil(test.length / 7),
    });
    similar.update();
    similar.find('.thumbnail').simulate('click');
    expect(similar.instance().fetch).toHaveBeenCalledTimes(1);
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
