const request = require('supertest');
const app = require('../server/app');
const client = require('../db/pgClient');

describe('Test the root path', () => {
  test('It should respond to the GET method', () =>
    request(app).get('/').then(response =>
      expect(response.statusCode).toBe(200)));

  test('It should send a 404 if the url doesn\'t exists', () =>
    request(app).get('/bort').then(response =>
      expect(response.statusCode).toBe(404)));
});

describe('Test the similar path', () => {
  beforeAll(() => client.connect());

  afterAll(() => client.end());

  test('It should respond to the GET with url "/item/:id/similar"', () =>
    request(app).get('/item/1/similar').then((response) => {
      const { body, statusCode } = response;
      expect(statusCode).toBe(200);
      expect(body.rows).toBeInstanceOf(Array);
      expect(body.rows[0].category).toBe('Movies');
      expect(body.rows[0].id).not.toBe(1);
    }));
});
