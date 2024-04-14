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
var ProductTemp = /** @class */ (function () {
    function ProductTemp() {
    }
    ProductTemp.prototype.Total = function () {
        return this.Qty * this.Price;
    };
    return ProductTemp;
}());
var ProductComponent = /** @class */ (function (_super) {
    __extends(ProductComponent, _super);
    function ProductComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Name = "Device one";
        _this.Price = 345.3;
        _this.Qty = 4;
        return _this;
    }
    ProductComponent.prototype.Total = function () {
        return this.Qty * this.Price;
    };
    ProductComponent.prototype.Print = function () {
        console.log("\n            Name: ".concat(this.Name, "\n            Price: ").concat(this.Price, "\n            Qty: ").concat(this.Qty, "\n            Total: ").concat(this.Total(), "\n        "));
    };
    return ProductComponent;
}(ProductTemp));
var ob = new ProductComponent();
ob.Print();
