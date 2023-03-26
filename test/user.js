// const { expect } = require('chai')
// const supertest = require('supertest')
// const api = supertest('/api/user/auth') // 定義測試的 API 路徑
// let APItoken // 全域變數等待 before() 取得 Token

// before((done) => {
//   api.post('/user/login') // 登入測試
//     .set('Accept', 'application/json')
//     .send({
//       user_mail: 'sparkles@sparkles.com',
//       user_password: '12345678'
//     })
//     .expect(200)
//     .end((err, res) => {
//       APItoken = res.body.token; // 登入成功取得 JWT
//       done();
//     });
// });


