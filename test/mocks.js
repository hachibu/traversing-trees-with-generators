const node = (value, children = []) => {
  const parent = {
    value,
    children,
  };
  for (let child of parent.children) {
    child.parent = parent;
  }
  return parent;
};

const tree = node(1, [node(2, [node(3), node(4)]), node(5, [node(6)])]);

module.exports = { tree };
