const { tree } = require("./tree");
const { traverseTrees } = require("./traverse-trees");

describe("traverseTree", () => {
  test("traverse tree depth-first", () => {
    let values = [...traverseTrees([tree, tree])].map((node) => node.value);
    expect(values).toEqual([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
  });
});
