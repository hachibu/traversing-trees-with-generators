const tree = {
  value: 1,
  children: [
    { value: 2, children: [] },
    {
      value: 3,
      children: [
        { value: 4, children: [] },
        { value: 5, children: [] },
      ],
    },
  ],
};

function linkParents(node) {
  for (let child of node.children) {
    child.parent = node;
    linkParents(child);
  }
  return node;
}

module.exports = {
  tree: linkParents(tree),
};
