function* traverseTree(node) {
  yield node;
  for (let child of node.children) {
    yield* traverseTree(child);
  }
}

module.exports = { traverseTree };
