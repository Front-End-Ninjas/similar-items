const {
  data,
  rating,
  reviews,
  price,
  prime,
} = require('../seedData/dataGenerator');

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
    expect(typeof prices).toBe('string');
    expect(prices[0]).toBe('$');
    expect(Number(prices[1])).toBeGreaterThanOrEqual(0);
    expect(prices[prices.length - 3]).toBe('.');
  });

  test('Prime should return a boolean', () => {
    const primes = prime();
    expect(typeof primes).toBe('boolean');
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
    expect('category' in item).toBe(true);
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
