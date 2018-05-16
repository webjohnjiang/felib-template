import index from '../src/index'
import {expect} from 'chai'


describe('类型方面的测试', function () {

  it('index is a object', function () {
    expect(index).to.be.an.instanceof(Object);
  });

});


describe('方法方面的测试', function () {

  it('index.log is a function', function () {
    expect(index.foo).to.be.an.instanceof(Function);
  });

  it('index.dir is a function', function () {
    expect(index.bar).to.be.an.instanceof(Function);
  });

});
