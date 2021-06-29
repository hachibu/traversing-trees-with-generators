import traverseTree from "./traverse-tree";

export function mapTree(tree, func) {
  return [...traverseTree(tree)].map(func);
}

export function reduceTree(tree, reducer, state) {
  return [...traverseTree(tree)].reduce(reducer, state);
}

export function filterTree(tree, predicate) {
  return [...traverseTree(tree)].filter(predicate);
}
