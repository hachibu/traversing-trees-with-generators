global.node = (value, children = []) => {
  const parent = {
    value,
    children,
  };
  for (let child of parent.children) {
    child.parent = parent;
  }
  return parent;
};
