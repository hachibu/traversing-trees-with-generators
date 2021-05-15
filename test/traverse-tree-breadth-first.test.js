const { tree } = require("./mocks");
const {
  traverseTreeBreadthFirst,
} = require("../src/traverse-tree-breadth-first");

describe("traverseTree", () => {
  test("traverse tree breadth-first", () => {
    let values = [...traverseTreeBreadthFirst(tree())].map(
      (node) => node.value
    );
    expect(values).toEqual([1, 2, 4, 3, 5]);
  });
});
