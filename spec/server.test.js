const request = require('supertest');
const app = require('../server/app');

describe('Test the root path', () => {
  test('It should response the GET method', () => {
    return request(app).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
    });
  });

  test('It should get a response Hello World back', () => {
    return request(app).get('/').then((response) => {
      expect(response.text).toBe('Hello World');
    });
  });

  test('It should get the response "YOU GOT SIMILAR" when calling the server with "/similar"', () => {
    return request(app).get('/similar').then((response) => {
      expect(response.text).toBe('YOU GOT SIMILAR');
    });
  });
});
