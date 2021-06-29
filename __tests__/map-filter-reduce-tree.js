import { mapTree, filterTree, reduceTree } from "../src/map-filter-reduce-tree";

const tree = node(1, [node(2, [node(3), node(4)]), node(5, [node(6)])]);

describe("mapTree", () => {
  test("double values", () => {
    let values = mapTree(tree, (node) => node.value * 2);
    expect(values).toEqual([2, 4, 6, 8, 10, 12]);
  });
});

describe("filterTree", () => {
  test("find even values", () => {
    let values = filterTree(tree, (node) => node.value % 2 === 0).map(
      (node) => node.value
    );
    expect(values).toEqual([2, 4, 6]);
  });
});

describe("reduceTree", () => {
  test("flatten tree", () => {
    let reducer = (state, node) => state.concat(node.value);
    expect(reduceTree(tree, reducer, [])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("sum tree", () => {
    expect(reduceTree(tree, (state, node) => state + node.value, 0)).toEqual(
      21
    );
  });
});
