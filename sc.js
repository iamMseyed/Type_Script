var x1 = 10;
console.log(x1);
var n1 = 10.3;
console.log(n1);
var x2 = "Mob";
console.log(x2);
var x3 = true;
console.log(x3);
var x4 = 100;
console.log(x4);
var x5 = true;
console.log(x5);
var x6 = "Hello";
console.log(x6);
var obj = {
    "name": "xyz",
    "age": "2900",
    "passion": "development"
};
console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj.passion);
var arr = [3, 5, 29, 4, "4"];
console.log(arr);
// var i:number;
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log(funName(12, 31));
function funName(x1, x2) {
    return x1 + x2;
}
//optional parameters
function funOptional(x1, x2) {
    if (isNaN(x2))
        console.log("Value of x1:" + x1);
    else
        console.log(x1 + x2);
}
funOptional(10);
funOptional(10, 20);
var n1;
var n2;
//default parameter
function calcuate(n1, n2) {
    if (n2 === void 0) { n2 = 10; }
    console.log(n1 + n2);
}
calcuate(1);
calcuate(10, 5);
var i;
function printArrayValue(arr) {
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
var arr = [1, 2, 3, 4, 5, "mobashir", "mehra", 1.3];
printArrayValue(arr);
//rest parameter with normal values 
var sum = 0;
function fnWithDotOnly() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    for (var i = 0; i < values.length; i++) {
        sum = sum + values[i];
    }
    console.log(sum);
}
fnWithDotOnly(1, 2, 3, 4, 5);
//rest parameter with normal values 
function fnWithVarAndDot(j) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < values.length; i++) {
        sum = sum + values[i];
    }
    console.log(sum);
    console.log("Value of string is ".concat(j));
}
fnWithVarAndDot('C', 2, 3, 4, 5);
//arrow function with return keyword written
var cal = function (x1, x2) {
    return x1 + x2;
};
console.log("Value via arrow function is: ".concat(cal(10, 20)));
////arrow function without return keyword written
var noReturnWritten = function (x1, x2) { return x1 + x2; };
console.log("No return written, still returning: ".concat(noReturnWritten(1, 2)));
//arrow function to return value 100
var ret100 = function () {
    return 100;
};
console.log(ret100());
//ENUM : constants
var EnumName;
(function (EnumName) {
    EnumName[EnumName["SUNDAY"] = 0] = "SUNDAY";
    EnumName[EnumName["MONDAY"] = 1] = "MONDAY";
    EnumName[EnumName["TUESDAY"] = 2] = "TUESDAY";
    EnumName[EnumName["FRIDAY"] = 3] = "FRIDAY";
})(EnumName || (EnumName = {}));
console.log("Enum is (with concat()): ".concat(EnumName)); //printing as [object Object]
console.log(EnumName); //printing EnumName as key value. first key value, then value key
console.log("Enum is: " + EnumName); //printing as [object Object]
for (var enumValue in EnumName) {
    // console.log(Number(enumValue));//put all in numbers only
    if (isNaN(Number(enumValue))) { //take only those which have just NaN type
        console.log(enumValue); //print only value
    }
}
//class with constructor initilizing non static variables
var ClassNameCon = /** @class */ (function () {
    function ClassNameCon() {
        this.x = 10;
        this.y = 20;
    }
    return ClassNameCon;
}());
var classNameCon = new ClassNameCon();
console.log(classNameCon.x);
console.log(classNameCon.y);
//class with constructor initilizing non static variables
var ClassNameMethod = /** @class */ (function () {
    function ClassNameMethod() {
    }
    ClassNameMethod.prototype.init = function () {
        this.x = 30;
        this.y = 40;
        ClassNameMethod.z = 20;
    };
    return ClassNameMethod;
}());
var classNameMethod = new ClassNameMethod();
classNameMethod.init();
console.log(classNameMethod.x);
console.log(classNameMethod.y);
console.log(ClassNameMethod.z);
//constructor with argument
var ClassWithParCon = /** @class */ (function () {
    function ClassWithParCon(a, b, c) {
        this.x = a;
        this.y = b;
        ClassWithParCon.z = c;
    }
    return ClassWithParCon;
}());
var classWithParCon = new ClassWithParCon(1, 'c', 1);
console.log("ns x: " + classWithParCon.x);
console.log("ns y: " + classWithParCon.y);
console.log("s z: " + ClassWithParCon.z);
var ClassOnly = /** @class */ (function () {
    function ClassOnly() {
        this.xx = 1;
        this.yy = 'c';
    }
    return ClassOnly;
}());
var classOnly = new ClassOnly();
// console.log("xx "+this.xx); //error/undefined
// console.log("yy: "+ this.yy); //error/undefined
console.log("xx " + classOnly.xx);
console.log("yy: " + classOnly.yy);
var ClassMulCon = /** @class */ (function () {
    function ClassMulCon(a) {
        this.x = a;
        console.log(this.x);
    }
    //not allowed constructor/method overloading
    // constructor(a:number, b:number){} 
    ClassMulCon.prototype.init = function (a) {
        this.x = a;
        console.log(this.x);
    };
    return ClassMulCon;
}());
var classMulCon = new ClassMulCon(12);
classMulCon.init(12);
var ClassWithoutNew = /** @class */ (function () {
    function ClassWithoutNew() {
    }
    ClassWithoutNew.prototype.funName = function () { };
    ;
    return ClassWithoutNew;
}());
/*object literal notation (alais of new keyword)
Though we can add function, and use key without quotes
*/
var classWithoutNew = {
    x: 5,
    y: 10,
    funName: function () {
        console.log("wtf");
    }
};
console.log(classWithoutNew.x);
console.log(classWithoutNew.y);
/*this is json which is subset of object literal notation, though we can key without quotes, and use function
here too, but it is not recommened to use. JSON is mostly used to transfer data between different technologies
*/
var obj1 = {
    name: "xyz",
    "age": "2900",
    "passion": "development",
    greet: function () {
        console.log("hello");
    }
};
console.log("json age:" + obj1.age);
console.log("json name :" + obj1.name);
console.log("json passion:" + obj1.passion);
console.log("json fun :" + obj1.greet);
var ImplClass = /** @class */ (function () {
    function ImplClass() {
        this.x = 17;
        this.y = "mehra";
    }
    ImplClass.prototype.call = function () {
        console.log("implementation of interNoPar interface");
    };
    ImplClass.prototype.name = function (val) {
        console.log("implementation of interWithPar interface having value: " + val);
    };
    ImplClass.prototype.printValue = function () {
        console.log("value of x is: " + this.x);
        console.log("value of y is: " + this.y);
    };
    return ImplClass;
}());
var implClassObj = new ImplClass();
implClassObj.printValue();
implClassObj.call();
implClassObj.name("Mob");
// implClassObj.x=11; //readonly
implClassObj.y = "g";
implClassObj.printValue();
