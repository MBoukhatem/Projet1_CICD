import request from 'supertest';
import app from '../index';

describe('GET /', () => {
  it('devrait retourner le message de bienvenue', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Bienvenue sur l'API projet1");
  });
});

describe('GET /health', () => {
  it('devrait retourner status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});
