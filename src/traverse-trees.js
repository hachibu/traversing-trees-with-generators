import traverseTree from "./traverse-tree";

export default function* traverseTrees(nodes) {
  for (let node of nodes) {
    yield* traverseTree(node);
  }
}
