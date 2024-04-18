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
var StudentInfo = /** @class */ (function () {
    function StudentInfo(_studentId, _studentName) {
        this._studentId = _studentId;
        this._studentName = _studentName;
    }
    StudentInfo.prototype.display = function () {
        document.write("\n            Student with Id as ".concat(typeof (this._studentId), " and Name as ").concat(typeof (this._studentName), ", \n            details ").concat(StudentInfo.a++, "  are:\n            Student Id: ").concat(this._studentId, ",\n            Student Name: ").concat(this._studentName, "\n            </br>\n            "));
    };
    StudentInfo.a = 1;
    return StudentInfo;
}());
var stuInfoObj = new StudentInfo(1, 'AnyName');
stuInfoObj.display();
var studInf = new StudentInfo('123ABC', 'anyName123');
studInf.display();
var stIn = new StudentInfo(false, 1);
stIn.display();
