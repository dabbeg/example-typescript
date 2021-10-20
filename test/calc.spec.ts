import Calculator from '../lib/calc'

describe('Calculator', () => {
  it('should add two numbers together', () => {
    const calc: Calculator = new Calculator()
    expect(calc.add(2, 3)).toBe(5)
  })
})
