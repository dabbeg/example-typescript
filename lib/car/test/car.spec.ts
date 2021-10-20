import Car from '../car'

describe('Car', () => {
  it('should accelerate car', () => {
    const car: Car = new Car()
    expect(car.accelerate(50)).toBe(50)
  })
})
