const request = require('supertest');
const express = require('express');

const app = express();
app.use(express.json());
app.get('/hello', (req, res) => res.json({ message: 'Hello from Practice API!' }));
app.post('/echo', (req, res) => res.json({ received: req.body }));

describe('Practice API', () => {
  it('returns hello message', async () => {
    const res = await request(app).get('/hello');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Hello from Practice API!' });
  });

  it('echoes request body', async () => {
    const payload = { name: 'Azure' };
    const res = await request(app).post('/echo').send(payload);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ received: payload });
  });
});
