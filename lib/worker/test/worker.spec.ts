import Worker from '../worker'

describe('Worker', () => {
  it('should get total days of work', () => {
    const worker: Worker = new Worker()
    expect(worker.work(2, 3)).toBe(6)
  })
})
