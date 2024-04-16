var GenericType = /** @class */ (function () {
    function GenericType() {
    }
    GenericType.prototype.genericMethod = function (anyValue) {
        document.write("<h3>Data type of ".concat(anyValue, " is ").concat(typeof anyValue, "</br> </h3>"));
    };
    return GenericType;
}());
var genericTypeObj = new GenericType();
genericTypeObj.genericMethod('Name');
genericTypeObj.genericMethod(123);
genericTypeObj.genericMethod(123);
genericTypeObj.genericMethod(12.3);
genericTypeObj.genericMethod(true);
var arr = [1, 2, 3, 4, 5];
genericTypeObj.genericMethod(arr);
var json = {
    name: 'hey',
    addr: 'any',
    mob: 12345,
    isActive: true
};
genericTypeObj.genericMethod(json);
