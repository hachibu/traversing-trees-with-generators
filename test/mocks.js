const tree = () =>
  linkTreeNodes({
    value: 1,
    children: [
      {
        value: 2,
        children: [{ value: 3, children: [] }],
      },
      {
        value: 4,
        children: [{ value: 5, children: [] }],
      },
    ],
  });

const linkTreeNodes = (node) => {
  for (let child of node.children) {
    child.parent = node;
    linkTreeNodes(child);
  }
  return node;
};

module.exports = { tree };
