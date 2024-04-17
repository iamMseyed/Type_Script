//a class which contains one or more than one abstract classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractClass = /** @class */ (function () {
    function AbstractClass() {
    }
    AbstractClass.prototype.printData = function () {
        console.log("\n        firstName is ".concat(this.firstName, "\n        lastName is ").concat(this.lastName, "    \n        age is ").concat(this.age, "\n        address is ").concat(this.address, "\n        "));
    };
    return AbstractClass;
}());
var ImplmentedAbsMethod = /** @class */ (function (_super) {
    __extends(ImplmentedAbsMethod, _super);
    function ImplmentedAbsMethod() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.firstName = 'firstName';
        _this.lastName = 'lastName';
        _this.age = 20;
        _this.address = 'Unknown';
        return _this;
    }
    ImplmentedAbsMethod.prototype.abstractMethod = function () {
        console.log("From implemented method!");
    };
    return ImplmentedAbsMethod;
}(AbstractClass));
var impObj = new ImplmentedAbsMethod();
impObj.printData();
impObj.abstractMethod();
