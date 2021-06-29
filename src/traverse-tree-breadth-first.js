export default function* traverseTreeBreadthFirst(node) {
  let queue = [node];
  while (queue.length > 0) {
    let curr = queue.shift();
    for (let child of curr.children) {
      queue.push(child);
    }
    yield curr;
  }
}
