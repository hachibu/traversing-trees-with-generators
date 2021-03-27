const Tree = require('./tree')

const createTree = () =>
  new Tree(1, [new Tree(2, [new Tree(4)]), new Tree(3)])

test('traverses tree', () => {
  let tree = createTree()
  let values = []
  for (let node of tree) {
    values.push(node.value)
  }
  expect(values).toEqual([1, 2, 4, 3])
})

describe('backtrack', () => {
  test('backtracks to the root', () => {
    let tree = createTree()
    let [leaf] = tree.filter(node => node.children.length === 0)
    let values = [...leaf.backtrack()].map(node => node.value)
    expect(values).toEqual([4, 2, 1])
  })

  test('does not backtrack to the root', () => {
    let tree = createTree()
    let [leaf] = tree.filter(node => node.children.length === 0)
    let values = [...leaf.backtrack(2)].map(node => node.value)
    expect(values).toEqual([4, 2])
  })
})

describe('reduce', () => {
  test('flattens tree values', () => {
    let tree = createTree()
    let reducer = (state, node) => state.concat(node.value)
    expect(tree.reduce(reducer, [])).toEqual([1, 2, 4, 3])
  })

  test('sums tree values', () => {
    let tree = createTree()
    expect(tree.reduce((state, node) => state + node.value, 0)).toEqual(10)
  })
})
