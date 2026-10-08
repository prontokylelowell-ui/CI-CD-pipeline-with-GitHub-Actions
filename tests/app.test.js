const request = require('supertest');
const app = require('../src/server');

describe('GET /api/health', () => {
  it('should return 200 and healthy status', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('healthy');
    expect(res.body.timestamp).toBeDefined();
  });
});

describe('GET /api/info', () => {
  it('should return 200 with app info', async () => {
    const res = await request(app).get('/api/info');
    expect(res.statusCode).toEqual(200);
    expect(res.body.app).toEqual('CI/CD Demo App');
    expect(res.body.message).toBeDefined();
  });
});

describe('GET /', () => {
  it('should return 200 with HTML content', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('CI/CD Pipeline Demo');
  });
});
