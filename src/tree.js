class Tree {
  constructor(value, children = []) {
    this.value = value
    this.children = children
    this.parent = null
    for (let child of this.children) {
      child.parent = this
    }
  }

  *backtrack(max = Infinity) {
    let curr = this
    let iter = 0
    while (curr && iter < max) {
      yield curr
      iter++
      curr = curr.parent
    }
  }

  *traverseDepthFirst() {
    yield this
    for (let child of this.children) {
      yield* child.traverseDepthFirst()
    }
  }

  *traverseBreadthFirst() {
    let queue = []
    queue.push(this)
    while (queue.length > 0) {
      let node = queue.shift()
      yield node
      for (let child of node.children) {
        queue.push(child)
      }
    }
  }

  reduceDepthFirst(reducer, state) {
    for (let node of this.traverseDepthFirst()) {
      state = reducer(state, node)
    }
    return state
  }

  reduceBreadthFirst(reducer, state) {
    for (let node of this.traverseBreadthFirst()) {
      state = reducer(state, node)
    }
    return state
  }

  search(predicate) {
    let result = []
    for (let node of this.traverseDepthFirst()) {
      if (predicate(node)) {
        result.push(node)
      }
    }
    return result
  }
}

module.exports = Tree
