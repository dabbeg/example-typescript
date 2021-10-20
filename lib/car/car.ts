export default class Car {
  speed: number

  constructor() {
    this.speed = 0
  }

  accelerate(kmPerHour: number): number {
    this.speed += kmPerHour;
    return this.speed
  }

  decelerate(kmPerHour: number): number {
    this.speed -= kmPerHour;
    return this.speed
  }

  stop(): number {
    this.speed = 0
    return this.speed
  }

  breakDown(): number {
    this.speed = 0
    return this.speed
  }
}
