import traverseTree from "../src/traverse-tree";

const tree = node(1, [node(2, [node(3), node(4)]), node(5, [node(6)])]);

describe("traverseTree", () => {
  test("traverse tree depth-first", () => {
    let values = [...traverseTree(tree)].map((node) => node.value);
    expect(values).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
