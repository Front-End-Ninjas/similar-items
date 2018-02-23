const request = require('supertest');
const app = require('../server/app');

describe('Test the root path', () => {
  test('It should respond to the GET method', () =>
    request(app).get('/').then(response =>
      expect(response.statusCode).toBe(200)));

  test("It should send a 404 if the url doesn't exists", () =>
    request(app).get('/bort').then(response =>
      expect(response.statusCode).toBe(404)));
});

describe('Test the similar path', () => {
  test('It should respond to the GET with url "/item/:id/similar"', () =>
    request(app).get('/item/19/similar').then(response =>
      expect(response.statusCode).toBe(200)));
});
