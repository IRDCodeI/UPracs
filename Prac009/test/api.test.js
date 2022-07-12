const request = require('supertest');
const server = require('../src/app');

//Testion get all users
//describe()

//it que me responda con 200

describe('GET /user', () => {
    it('responde con json y contiene una lista de usuarios', done => {
        request(server)
            .get('/users')
            .set('Aceptado', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('GET /users/:id', () => {
    it('Respuesta cuando llamo por id', (done) => {
        request(server)
        .get('/users/U001')
        .set('Aceptado', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);  
    });

    it('Respuesta cuando llamo por id y no funciona', (done) => {
        request(server)
        .get('/users/U003')
        .set('Aceptado', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404);
        done();
        //.expect('Usuario no encontrado');  
    });
});

describe('POST /users', () => {
    it('TEST 05 usuario creado', done => {
        const data = {
            username: 'admin',
            password: 'admin01'
        }

        request(server)
            .post('/users')
            .send(data)
            .set('Aceptando', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err) => {
                if(err) return done(err);
                done();
            })
    });

    it('TEST 06 usuario no creado', done => {
        const data = {};

        request(server)
            .post('/users')
            .send('Aceptado', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404)
            //.expect('Usuario no creado')
            .end( (err) => {
                if(err) return done(err);
                done();
            });
            done();
    })
});

module.exports = server;