import traverseTree from "../src/traverse-tree";
import backtrackTree from "../src/backtrack-tree";

const tree = node(1, [node(2, [node(3), node(4)]), node(5, [node(6)])]);

describe("backtrackTree", () => {
  test("backtrack to root", () => {
    let leaf = [...traverseTree(tree)].pop();
    let values = [...backtrackTree(leaf)].map((node) => node.value);
    expect(values).toEqual([6, 5, 1]);
  });

  test("backtrack 1 level", () => {
    let leaf = [...traverseTree(tree)].pop();
    let values = [...backtrackTree(leaf, 1)].map((node) => node.value);
    expect(values).toEqual([6, 5]);
  });
});
