const { Recipe, Diet, conn } = require('../../src/db.js');
const { expect } = require('chai');
//
describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe('title', () => {
      it('should throw an error if name is null', (done) => {
        Recipe.create({})
          .then(() => done(new Error('It requires a valid title')))
          .catch(() => done());
      });
      it('should work when its a valid title', () => {
        Recipe.create({ title: 'Milanesa a la napolitana' });
      });
      it('summary debe ser string', (done) => {
        Recipe.create({summary: 1})
        .then(() => done('no deberia haber sido creado'))
        .catch(() => done());
      });
    });
  });
});

describe('Diet model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Diet.sync({ force: true }));
    describe('id', () => {
      it('should throw an error if name is null', (done) => {
        Diet.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
    
      it('diet must be string', (done) => {
        Diet.create({name: 1})
        .then(() => done('no deberia haber sido creado'))
        .catch(() => done());
      });
    });
  });
});
