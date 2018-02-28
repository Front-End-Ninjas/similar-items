const request = require('supertest');
const app = require('../server/app');

describe('Test the root path', () => {
  test('It should respond to the GET method', () =>
    request(app).get('/').then(response =>
      expect(response.statusCode).toBe(200)));

  test('It should send a 404 if the url doesn\'t exists', () =>
    request(app).get('/bort').then(response =>
      expect(response.statusCode).toBe(404)));
});

describe('Test the similar path', () => {
  test('It should respond to the GET with url "/item/:id/similar"', () =>
    request(app).get('/item/19/similar').then((response) => {
      const { body, statusCode } = response;

      expect(statusCode).toBe(200);
      expect(body.rows).toBeInstanceOf(Array);
      expect(body.rows[0].category).toBe('Outdoors');
    }));
});

describe('Test the thumbnail path', () => {
  test('It should respond to the GET request', () =>
    request(app).get('/thumbnail/img/19').then(response =>
      expect(response.statusCode).toBe(200)));

  test('It should send an error if the url doesn\t exists', () =>
    request(app).get('/thumbnail/img/900').then(response =>
      expect(response.statusCode).toBe(404)));

  test('It should send an image', () =>
    request(app).get('/thumbnail/img/19').then((response) => {
      expect(response.body).toBeInstanceOf(Buffer);
      expect(response.type).toBe('image/jpeg');
    }));
});
