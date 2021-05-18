const { traverseTree } = require("./traverse-tree");

function* traverseTrees(nodes) {
  for (let node of nodes) {
    yield* traverseTree(node);
  }
}

module.exports = { traverseTrees };
