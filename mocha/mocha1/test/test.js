var expect = chai.expect;
var should = chai.should();

describe('my test suite', function () {
  it('  Testiranje da je 3 jednako 3', function () {
    expect(3).to.eql(3);
  });

  it('2 should be greater than 1', function() {
  expect(2).to.be.greaterThan(1);
});
it('1 should equal 1', function() {
  expect(1).to.equal(8);
});

it('Should always return a boolean', function() {
  expect(isEven(2)).to.be.a('boolean');
});

it('Calling isEven(76) sould return true.', function() {
  expect(isEven(76)).to.be.true;
});

it('Calling isEven(77) sould return false.', function() {
  expect(isEven(77)).to.be.false;
});
});