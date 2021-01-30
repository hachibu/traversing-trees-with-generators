const Tree = require('./tree')

const createTree = () =>
  new Tree(1, [new Tree(2, [new Tree(4)]), new Tree(3)])

test('backtrack', () => {
  let tree = createTree()
  let [leaf] = tree.search(node => node.children.length === 0)
  let values = [...leaf.backtrack()].map(node => node.value)
  expect(values).toEqual([4, 2, 1])
})

test('backtrack max', () => {
  let tree = createTree()
  let [leaf] = tree.search(node => node.children.length === 0)
  let values = [...leaf.backtrack(2)].map(node => node.value)
  expect(values).toEqual([4, 2])
})

test('traverse depth-first', () => {
  let tree = createTree()
  let values = [...tree.traverseDepthFirst()].map(node => node.value)
  expect(values).toEqual([1, 2, 4, 3])
})

test('traverse breadth-first', () => {
  let tree = createTree()
  let values = [...tree.traverseBreadthFirst()].map(node => node.value)
  expect(values).toEqual([1, 2, 3, 4])
})

test('flatten tree values depth-first', () => {
  let tree = createTree()
  let reducer = (state, node) => state.concat(node.value)
  expect(tree.reduceDepthFirst(reducer, [])).toEqual([1, 2, 4, 3])
})

test('flatten tree values breadth-first', () => {
  let tree = createTree()
  let reducer = (state, node) => state.concat(node.value)
  expect(tree.reduceBreadthFirst(reducer, [])).toEqual([1, 2, 3, 4])
})

test('sum tree values', () => {
  let tree = createTree()
  expect(tree.reduceDepthFirst((state, node) => state + node.value, 0)).toEqual(10)
})
