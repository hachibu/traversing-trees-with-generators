const node = (value, children = []) => ({ value, children });

const link = (node) => {
  for (let child of node.children) {
    child.parent = node;
    link(child);
  }
  return node;
};

const tree = () => link(node(1, [node(2, [node(3)]), node(4, [node(5)])]));

module.exports = { tree };
