function* traverseTrees(nodes) {
  for (let node of nodes) {
    yield node
    yield* traverseTrees(node.children);
  }
}

module.exports = { traverseTrees };
