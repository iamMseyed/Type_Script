"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee() {
        this.pId = 1;
        this.pName = 'Any Name';
    }
    Employee.prototype.printData = function () {
        console.log("Person id: ".concat(this.pId, "\n             Person Name: ").concat(this.pName, "\n             Person Age: ").concat(this.pAge, "\n            "));
    };
    return Employee;
}());
var empObj = new Employee();
empObj.printData();
