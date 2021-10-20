"use strict";
exports.__esModule = true;
var calc_1 = require("../calc");
describe('Calculator', function () {
    it('should add two numbers together', function () {
        var calc = new calc_1["default"]();
        expect(calc.add(2, 3)).toBe(5);
    });
});
//# sourceMappingURL=calc.spec.js.map