"use strict";
exports.__esModule = true;
var Worker = /** @class */ (function () {
    function Worker() {
    }
    Worker.prototype.work = function (days, numberOfWorkers) {
        return days * numberOfWorkers;
    };
    Worker.prototype.workOvertime = function (days, numberOfWorkers) {
        return days * numberOfWorkers * 1.8;
    };
    return Worker;
}());
exports["default"] = Worker;
//# sourceMappingURL=worker.js.map