const { tree } = require("./mocks");
const { mapTree, filterTree, reduceTree } = require("./map-filter-reduce-tree");

describe("mapTree", () => {
  test("double values", () => {
    let values = mapTree(tree(), (node) => node.value * 2);
    expect(values).toEqual([2, 4, 6, 8, 10]);
  });
});

describe("filterTree", () => {
  test("find even values", () => {
    let values = filterTree(tree(), (node) => node.value % 2 === 0).map(
      (node) => node.value
    );
    expect(values).toEqual([2, 4]);
  });
});

describe("reduceTree", () => {
  test("flatten tree", () => {
    let reducer = (state, node) => state.concat(node.value);
    expect(reduceTree(tree(), reducer, [])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sum tree", () => {
    expect(reduceTree(tree(), (state, node) => state + node.value, 0)).toEqual(
      15
    );
  });
});
