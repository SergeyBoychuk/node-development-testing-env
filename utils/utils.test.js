const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {
  it('should add to numbers', () => {
    var res = utils.add(33,11);
    expect(res).toBe(44).toBeA('number');
  });
  
  it('should multiply by itself', () => {
    var res = utils.square(2);
    expect(res).toBe(4).toBeA('number');
  })
  
  it('should expect some values', () => {
    // expect({name: 'andrew'}).toNotEqual({name: 'Andrew'})
    expect({
      name: 'Andrew',
      age: 25,
      location: 'North Port'
    }).toInclude({
      age: 25
    })
  })
})



it('should add to a number', (done) => {
  utils.asyncAdd(4,3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  })
})

it('should have first and last name', () => {
  var user = {location: 'North Port', age: 25}
  var res = utils.setName(user, 'Sergey Boychuk');

  expect(res).toInclude({
    firstName: 'Sergey',
    lastName: 'Boychuk'
  })
})

it('should take 3 numbers and multiply them all',(done) => {
  utils.tripleIt(3,4,5, (sum) => {
    expect(sum).toBe(60);
    done();
  })
})