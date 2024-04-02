const request = require('supertest')
const app = require('../src/app')
describe('insert ad', () => {
  it('should create a new ad 1', async () => {
    const res = await request(app)
      .post('/ads/insertAds')
      .send({
          "title":"test01",
          "description":"test ads"
        })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('message')
    expect(res.body).toHaveProperty('ad')
  })
})

describe('insert ad', () => {
  it('should create a new ad 2', async () => {
    const res = await request(app)
      .post('/ads/insertAds')
      .send({
          "title":"test02",
          "description":"test ads"
        })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('message')
    expect(res.body).toHaveProperty('ad')
  })
})

describe(' failed insert ad', () => {
  it('should create a new ad 2', async () => {
    const res = await request(app)
      .post('/ads/insertAds')
      .send({
          "title":"test02",
          "description":"test ads"
        })
    expect(res.statusCode).toEqual(408)
    expect(res.body).toHaveProperty('message')
    expect(res.body).toHaveProperty('title')
  })
})

describe('read all ads', () => {
  it('should create a new ad', async () => {
    const res = await request(app)
      .get('/')
      expect(res.statusCode).toEqual(200)
  })
})

describe('PUT:update ad', () => {
  it('should update ad', async () => {
    const res = await request(app)
      .put('/ads/updateAds/test02')
      .send({
          "description":"test ads updated",
          "status": "active"
        })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('message')
  })
})

describe('PUT:update ad', () => {
  it('should update ad', async () => {
    const res = await request(app)
      .delete('/ads/deleteAds/test02')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('message')
  })
})