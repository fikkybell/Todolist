const assert = require('assert');
const request = require('supertest');
const app = require('../index');


describe('Todo Api', function () {


    it('should create a todo', (done) => {
        request(app)
            .post('/todo')
            .send({ "title": 'Todo', "description": 'Todo description' })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    })

    it('should update if todo exists', function (done) {
        request(app)
            .put('/todo/1')
            .send({ "title": 'New Todo', "description": 'New Todo description' })
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    });

    it('should get if todo exists', function (done) {
        request(app)
            .get('/')
            .send({ "title": 'Get Todo', "description": 'Getting Todo description' })
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    });

})




