"use strict";
exports.__esModule = true;
var car_1 = require("../car");
describe('Car', function () {
    it('should accelerate car', function () {
        var car = new car_1["default"]();
        expect(car.accelerate(50)).toBe(50);
    });
});
//# sourceMappingURL=car.spec.js.map