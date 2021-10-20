"use strict";
exports.__esModule = true;
var worker_1 = require("../worker");
describe('Worker', function () {
    it('should get total days of work', function () {
        var worker = new worker_1["default"]();
        expect(worker.work(2, 3)).toBe(6);
    });
});
//# sourceMappingURL=worker.spec.js.map