import traverseTreeBreadthFirst from "../src/traverse-tree-breadth-first";

const tree = node(1, [node(2, [node(3), node(4)]), node(5, [node(6)])]);

describe("traverseTree", () => {
  test("traverse tree breadth-first", () => {
    let values = [...traverseTreeBreadthFirst(tree)].map((node) => node.value);
    expect(values).toEqual([1, 2, 5, 3, 4, 6]);
  });
});
