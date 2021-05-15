const { tree } = require("./mocks");
const { traverseTree } = require("../src/traverse-tree");

describe("traverseTree", () => {
  test("traverse tree depth-first", () => {
    let values = [...traverseTree(tree())].map((node) => node.value);
    expect(values).toEqual([1, 2, 3, 4, 5]);
  });
});
