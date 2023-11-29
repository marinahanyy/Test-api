const request = require('supertest');
let required_token = "";
const { 
  v4: uuidv4,
} = require('uuid');
const myuuid = uuidv4();

describe('Testing mock-user-auth', () => {      
    let sharedVariable;  
       it('should login the user', function(done) {
        request('http://localhost:8080')
          .post('/api/v1/auth')
          .send({ email: "user@gmail.com", password: "user123"})
          .expect(200) // Expect a 200 status code
          .end((err, res) => {
          
          expect(res.body).toBeDefined();
          expect(res.body.token).toBeDefined();
          required_token = res.body.token;
          done();
       
        });
    });
    it('should be given name email and password to create user', function(done) {
       request('http://localhost:8080')
        .post('/api/v1/users')
        .send({ name:'user' + myuuid, email: 'user'+myuuid+'@gmail.com', password: 'user123' })
        .expect(200) 
        .end((err, res) => {
          
          expect(res.body).toBeDefined();
          expect(res.body.message).toBe('User registered with success');
          done();
        });
    });

    it('should be given token and respond with user details',  function(done) {
      const user = {
        "name": "user",
        "email": "user@gmail.com",
        "password": "user123",
        "imageUrl": "https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg"
      };
       request('http://localhost:8080')
        .get('/api/v1/users/')
        .set('Authorization',required_token)
        .expect(200) 
        .end((err, res) => {
          
          expect(res.body).toBeDefined();
          expect(res.body.email).toBe(user.email);
          expect(res.body.password).toBe(user.password);
          expect(res.body.imageUrl).toBe(user.imageUrl);
          done();
        });
    });

    it('should update user by token',  function(done) {
      const updateData = {
       "name": "user",
       "email": "user@gmail.com",
       "password": "user123"
     };
      request('http://localhost:8080')
       .patch('/api/v1/users')
       .set('Authorization', required_token)
       .send(updateData)
       .expect(200)
       .end((err, res) => {
         expect(res.body).toBeDefined();
         expect(res.body.message).toBe('User updated with success!');
         done();
       });
   });
  //  it('should delete user by token',  function(done) {
  //   request('http://localhost:8080')
  //     .delete('/api/v1/users')
  //     .set('Authorization', required_token)
  //     .expect(200)
  //     .end((err, res) => {
  //       expect(res.body).toBeDefined();
  //       expect(res.body.message).toBe('User deleted with success');
  //       done();
  //     });
  // });
  // it('should delete all users with the correct admin key', function(done) {
  //   const adminKey = 'keyadmin123';
  //    request('http://localhost:8080')
  //     .delete('/api/v1/all-users')
  //     .send({ key_admin: adminKey })
  //     .expect(200)
  //     .end((err, res) => {
  //       expect(res.body).toBeDefined();
  //       expect(res.body.message).toBe('Users deleted with success');
  //       done();
  //     });
  // });
});


