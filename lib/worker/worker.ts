export default class Worker {
  work(days: number, numberOfWorkers: number): number {
    return days * numberOfWorkers;
  }

  workOvertime(days: number, numberOfWorkers: number): number {
    return days * numberOfWorkers * 1.8;
  }
}
