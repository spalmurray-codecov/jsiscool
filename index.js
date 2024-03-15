function addNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("a and b must be numbers")
  }
  return a + b
}

function main() {
  console.log(addNumbers(1, 2))
}

main()

module.exports = {
  addNumbers
}
