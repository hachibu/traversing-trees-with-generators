const { traverseTree } = require("./traverse-tree");

function mapTree(tree, func) {
  return [...traverseTree(tree)].map(func);
}

function reduceTree(tree, reducer, state) {
  return [...traverseTree(tree)].reduce(reducer, state);
}

function filterTree(tree, predicate) {
  return [...traverseTree(tree)].filter(predicate);
}

module.exports = { mapTree, reduceTree, filterTree };
