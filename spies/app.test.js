const expect = require('expect');

describe('App', () => {
  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Andrew');
    expect(spy).toHaveBeenCalledWith('Andrew', 25);
  })
})