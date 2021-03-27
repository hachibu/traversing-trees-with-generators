class Tree {
  constructor(value, children = []) {
    this.value = value
    this.children = children
    this.parent = null
    for (let child of this.children) {
      child.parent = this
    }
  }

  *[Symbol.iterator]() {
    yield this
    for (let child of this.children) {
      yield* child
    }
  }

  map(func) {
    return [...this].map(func)
  }

  reduce(reducer, state) {
    return [...this].reduce(reducer, state)
  }

  filter(predicate) {
    return [...this].filter(predicate)
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
}

module.exports = Tree
