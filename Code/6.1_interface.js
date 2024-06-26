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
var javaScriptLegacy = {
    RestParameter: "Allows multiple Values",
    Operator: "Any Operator",
    Optional: 50
};
var javaScriptModern = {
    Operator: "Exponent Operator",
    RestParameter: "Allows multiple Values",
    MapDatatype: "Key Value pair",
    // Optional:30 //no need to constructor as is optional part (?)
};
console.log("\n    JSL RestParameter:".concat(javaScriptLegacy.RestParameter, "\n    JSL Operator: ").concat(javaScriptLegacy.Operator, "\n    JSL Optional Number: ").concat(javaScriptLegacy.Optional, "\n"));
console.log("\n    JSM MapDatatype:".concat(javaScriptModern.MapDatatype, "\n    JSM Operator: ").concat(javaScriptModern.Operator, "\n    JSP RestParameter: ").concat(javaScriptModern.RestParameter, "\n    "));
// class ProductClass implements IProduct{  //if we implement all methods of interface here
var ProductClass = /** @class */ (function () {
    function ProductClass() {
    }
    ProductClass.prototype.Total = function () {
        return this.Price * this.Qty;
    };
    return ProductClass;
}());
var Implemeneted = /** @class */ (function (_super) {
    __extends(Implemeneted, _super);
    function Implemeneted() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Name = 'Nokia 6600';
        _this.Price = 7800;
        _this.Qty = 10;
        return _this;
    }
    Implemeneted.prototype.Total = function () {
        return this.Price * this.Qty;
    };
    Implemeneted.prototype.Print = function () {
        document.write(" <h2>=========Product details=======</h2>\n            <h3>\n                Name: ".concat(this.Name, " </br> Price: ").concat(this.Price, " </br> Qty: ").concat(this.Qty, "\n                </br> Total: ").concat(this.Total(), "$\n            </h3>\n        "));
    };
    return Implemeneted;
}(ProductClass));
var implObj = new Implemeneted();
implObj.Print();
var DatabaseConnection = /** @class */ (function () {
    function DatabaseConnection() {
    }
    DatabaseConnection.prototype.Connect = function (connectionString) {
        document.write('<h2> ===== Connection Details ===== </h2>');
        for (var property in connectionString)
            document.write("<h4>Property : ".concat(property, ", Value: ").concat(connectionString[property], "</br></h4>"));
    };
    return DatabaseConnection;
}());
var oracle = new DatabaseConnection();
oracle.Connect({
    driver: 'odbc',
    username: 'abc',
    password: 'pqr',
    database: 'oracleDB'
});
var mysql = new DatabaseConnection();
mysql.Connect({
    host: 'anyHost',
    user: 'mno',
    password: 'pqr',
    database: 'mysqlDB'
});
var mongoDB = new DatabaseConnection();
mongoDB.Connect({
    url: 'any URL'
});
var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.getData = function (data) {
        return data;
    };
    return DataService;
}());
var dataServiceObj = new DataService();
var iProd = dataServiceObj.getData({ Name: 'hello', Price: 1200, Qty: 12 });
var iProds = dataServiceObj.getData([
    {
        Name: 'name1', Price: 1200, Qty: 15
    },
    {
        Name: 'name2', Price: 1030, Qty: 123
    },
    {
        Name: 'name3', Price: 100, Qty: 123
    }
]);
var emp = dataServiceObj.getData({ Name: 'EmpName', Salary: 12000, Designation: 'Full Stack Developer' });
document.write("====Product====</br>");
for (var pro in iProd)
    document.write("Key: ".concat(pro, " - Val: ").concat(iProd[pro], "</br>"));
document.write('</br>===Products===</br>');
document.write('Via forEach():');
iProds.forEach(function (item, index) {
    document.write("</br>Product ".concat(index + 1, ":"));
    document.write("Name: ".concat(item.Name));
    document.write("Price: ".concat(item.Price));
    document.write("Qty: ".concat(item.Qty));
});
document.write('</br></br>Via for loop:');
for (var i = 0; i < iProds.length; i++) {
    var item = iProds[i];
    document.write("</br>Product ".concat(i + 1, ":"));
    document.write("\nName: ".concat(item.Name));
    document.write("\nPrice: ".concat(item.Price));
    document.write("\nQty: ".concat(item.Qty));
}
