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

describe('Panier', () => {
  const panier = [
    { nom: 'Pomme', quantite: 3, prix: 1.5 },
    { nom: 'Banane', quantite: 5, prix: 0.8 },
    { nom: 'Orange', quantite: 2, prix: 2.0 },
  ];

  it('devrait contenir 3 articles', () => {
    expect(panier.length).toBe(3);
  });

  it('devrait avoir des quantités positives', () => {
    panier.forEach((item) => {
      expect(item.quantite).toBeGreaterThan(0);
    });
  });

  it('devrait avoir des prix positifs', () => {
    panier.forEach((item) => {
      expect(item.prix).toBeGreaterThan(0);
    });
  });
});
