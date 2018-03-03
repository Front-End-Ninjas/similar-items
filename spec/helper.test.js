import helper from '../client_helpers/helper';
import search from '../client/api_request/api';

describe('Testing shift function for client', () => {
  const page = 1;
  const list = Array(21).fill(1).map((num, i) => num * i);
  const shifted = helper.shift(page, list);

  test('Should return a state object with page and list property', () => {
    expect(shifted).toBeInstanceOf(Object);
    expect(shifted).toHaveProperty('page', 1);
    expect(shifted).toHaveProperty('list');
    expect(shifted.list).toEqual(expect.arrayContaining([7, 8, 9, 10, 11, 12, 13]));
  });
});

describe('Testing determinePage function', () => {
  test('Should return page increased by one if "right" is passed in', () => {
    expect(helper.page('right', 1, 3)).toBe(2);
  });

  test('Should return page decrease by one if "left" is passed in', () => {
    expect(helper.page('left', 1, 3)).toBe(0);
  });

  test('Should return page of 0 if "start-over" is passed in', () => {
    expect(helper.page('start-over', 1, 3)).toBe(0);
  });

  test('Should return undefined if none of the conditions are met', () => {
    expect(helper.page('right', 1, 2)).toBe(undefined);
    expect(helper.page('left', 0, 1)).toBe(undefined);
    expect(helper.page('bad-name', 0, 1)).toBe(undefined);
  });
});

describe('Testing axios', () => {
  test('Should return an object', () => {
    search(1).then(result => expect(result).toBeInstanceOf(Object));
  });

  test('Object returned should have the appropriate properties', () => {
    search(1).then((result) => {
      expect(result.page).toBe(0);
      expect(result.total).toBeInstanceOf(Array);
      expect(result.list.length).toBe(7);
      expect(result.limit).toBeGreaterThan(0);
    });
  });
});
