const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Hello World from Cloud Run'));

test('GET / returns Hello World', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe('Hello World from Cloud Run');
});
