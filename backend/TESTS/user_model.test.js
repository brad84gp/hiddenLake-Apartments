const request = require('supertest');
const express = require('express');
const userRoutes = require('../routes/users')

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use('/users', userRoutes)


describe('test route', () => {
    test('responds to /user/apartment', async () => {
      const req = {
        "username":"brad84gp",
        "isAuthenticated" : true
      }
      let res = await request(app).post('/users/user/apartment').send(req)
      expect(res.text).toBe('yes')
      
    })
  })