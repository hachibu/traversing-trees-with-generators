const { tree } = require("./tree");
const { traverseTree } = require("./traverse-tree");
const { backtrackTree } = require("./backtrack-tree");

describe("backtrackTree", () => {
  test("backtrack to root", () => {
    let leaf = [...traverseTree(tree)].pop();
    let values = [...backtrackTree(leaf)].map((node) => node.value);
    expect(values).toEqual([5, 3, 1]);
  });

  test("backtrack 1 level", () => {
    let leaf = [...traverseTree(tree)].pop();
    let values = [...backtrackTree(leaf, 1)].map((node) => node.value);
    expect(values).toEqual([5, 3]);
  });
});
