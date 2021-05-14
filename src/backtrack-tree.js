function* backtrackTree(node, max = Infinity) {
  let curr = node;
  let iter = 0;
  while (curr && iter < max) {
    yield curr;
    curr = curr.parent;
    iter++;
  }
}

module.exports = { backtrackTree };
