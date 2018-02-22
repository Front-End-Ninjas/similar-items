const request = require('supertest');
const app = require('../server/app');

describe('Test the root path', () => {
  test('It should response the GET method', () =>
    request(app).get('/').then(response =>
      expect(response.statusCode).toBe(200)));

  test('It should get a response Hello World back', () =>
    request(app).get('/').then(response =>
      expect(response.text).toBe('Hello World')));

  test('It should get the response "YOU GOT SIMILAR" when calling the server with "/similar"', () =>
    request(app).get('/similar').then(response =>
      expect(response.text).toBe('YOU GOT SIMILAR')));

  test("It should send a 404 if the url doesn't exists", () =>
    request(app).get('/bort').then(response =>
      expect(response.statusCode).toBe(404)));
});
