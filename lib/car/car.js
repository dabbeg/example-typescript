"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car() {
        this.speed = 0;
    }
    Car.prototype.accelerate = function (kmPerHour) {
        this.speed += kmPerHour;
        return this.speed;
    };
    Car.prototype.decelerate = function (kmPerHour) {
        this.speed -= kmPerHour;
        return this.speed;
    };
    Car.prototype.stop = function () {
        this.speed = 0;
        return this.speed;
    };
    Car.prototype.breakDown = function () {
        this.speed = 0;
        return this.speed;
    };
    return Car;
}());
exports["default"] = Car;
//# sourceMappingURL=car.js.map