// 测试脚本 add.specs.js
import { expect } from 'chai'; // 断言库
import add from '../src/add';

describe('add模块的测试', () => {
  it('add is a function', () => {
    expect(add).to.be.an.instanceof(Function)
  })
  it('2 + 4 = 6', () => {
    expect(add(2, 4)).equal(6);
  })
});
