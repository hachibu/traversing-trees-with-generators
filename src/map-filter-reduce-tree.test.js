const { tree } = require('./tree');
const { reduceTree } = require('./map-filter-reduce-tree');

describe('reduceTree', () => {
  test('flatten tree', () => {
    let reducer = (state, node) => state.concat(node.value)
    expect(reduceTree(tree, reducer, [])).toEqual([1, 2, 3, 4, 5])
  });

  test('sum tree', () => {
    expect(reduceTree(tree, (state, node) => state + node.value, 0)).toEqual(15)
  });
});
