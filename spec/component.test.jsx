import React from 'react';
import { shallow } from 'enzyme';
import SLV from '../client/components/SimilarListView';
import TV from '../client/components/ThumbnailView';

describe('Testing the SimilarListView', () => {
  const similar = shallow(<SLV />);

  it('Should be defined', () => expect(SLV).toBeDefined());

  it('Should have render "ThumbnailView"', () => {
    expect(similar.find('ThumbnailView').length).toBe(300);
  });

  it('Should have appropriate containers', () => {
    expect(similar.find('.page-container').length).toBe(1);
    expect(similar.find('.carousel-container').length).toBe(1);
    expect(similar.find('.thumbnail-container').length).toBe(1);
  });
});

describe('Testing the ThumbnailView', () => {
  const data = {
    id: 0,
    title: 'PRODUCT NAME',
    rating: 4,
    reviews: 114,
    price: 76.19,
    prime: true,
    category: 'CAMPING',
    relativePath: '/thumbnail/img/14',
  };

  const thumbnail = shallow(<TV item={data} key={data.id} />);

  it('Should be defined', () => expect(TV).toBeDefined());

  it('Should have rendered the item information', () => {
    expect(thumbnail.find('.title').text()).toBe('PRODUCT NAME');
    expect(thumbnail.find('.rating').text()).toBe('4');
    expect(thumbnail.find('.reviews').text()).toBe('114');
    expect(thumbnail.find('.price').text()).toBe('76.19');
  });
});
