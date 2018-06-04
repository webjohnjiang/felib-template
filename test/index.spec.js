import index from '../src/index'
import {expect} from 'chai'


describe('类型方面的测试', function () {

  it('index is a object', function () {
    expect(index).to.be.an.instanceof(Object);
  });

});


describe('方法方面的测试', function () {

  it('index.add is a function', function () {
    expect(index.add).to.be.an.instanceof(Function);
  });

  it('index.sub is a function', function () {
    expect(index.sub).to.be.an.instanceof(Function);
  });

});
