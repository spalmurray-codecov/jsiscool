describe("addNumbers", () => {
  it("should add two number", () => {
    const addNumbers = require('./index').addNumbers
    expect(addNumbers(1, 2)).toEqual(3)
  })
})
