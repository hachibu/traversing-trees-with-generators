import traverseTrees from "../src/traverse-trees";

const tree = node(1, [node(2, [node(3), node(4)]), node(5, [node(6)])]);

describe("traverseTree", () => {
  test("traverse trees depth-first", () => {
    let values = [...traverseTrees([tree, tree])].map((node) => node.value);
    expect(values).toEqual([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]);
  });
});
