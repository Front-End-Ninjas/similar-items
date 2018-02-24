const {
  data,
  rating,
  reviews,
  price,
  prime,
  path,
} = require('../dummyData/dummyGenerator');

describe('Testing helper functions for dummy generator', () => {
  test('Ratings should return a number', () => {
    const rate = rating();
    expect(typeof rate).toBe('number');
    expect(rate).toBeGreaterThan(0);
    expect(rate).toBeLessThan(6);
  });

  test('Reviews should return a number', () => {
    const review = reviews();
    expect(typeof review).toBe('number');
    expect(review).toBeGreaterThanOrEqual(0);
    expect(review).toBeLessThanOrEqual(255);
  });

  test('Price should return a number', () => {
    const prices = price();
    expect(typeof prices).toBe('number');
    expect(prices).toBeLessThan(400);
    expect(prices).toBeGreaterThanOrEqual(0);
  });

  test('Prime should return a boolean', () => {
    const primes = prime();
    expect(typeof primes).toBe('boolean');
  });

  test('Path should return a relativePath', () => {
    const relative = path({ id: 19 });
    expect(relative).toBe('/thumbnail/img/19');
  });
});

describe('Testing dummy data generator', () => {
  test('Should be an array of objects', () => {
    expect(Array.isArray(data)).toBe(true);
  });

  test('Should have an object with the properties id, title, type, rating, reviews, prime, price, thumbnail, relativePath', () => {
    const item = data[0];
    expect('id' in item).toBe(true);
    expect('title' in item).toBe(true);
    expect('type' in item).toBe(true);
    expect('rating' in item).toBe(true);
    expect('reviews' in item).toBe(true);
    expect('prime' in item).toBe(true);
    expect('price' in item).toBe(true);
    expect('relativePath' in item).toBe(true);
  });

  test('Should return 300 objects', () => {
    expect(data.length).toBe(300);
  });
});
