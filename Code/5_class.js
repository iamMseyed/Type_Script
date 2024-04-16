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
var username = prompt("Enter username");
var userPass = prompt("Enter password");
var prdctName = prompt("Enter product name");
//take input from user
var Product = /** @class */ (function () {
    function Product() {
    }
    Object.defineProperty(Product.prototype, "prodName", {
        get: function () {
            return this._pruName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "productName", {
        set: function (newProd) {
            if (username == 'abc' && userPass == 'pqr') {
                this._pruName = newProd;
            }
            else
                document.write("<h1>You are not authorized to add data!</h1>");
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var ob = new Product();
ob.productName = prdctName; //set productName
if (ob.prodName) { //check if prodName is set
    document.write("<h1> Product Added is: ".concat(ob.prodName, "</h1>"));
}
var Base = /** @class */ (function () {
    function Base() {
        this.price = 1500;
    }
    Base.prototype.print = function () {
        document.write("<h2>\n                            Static Name is ".concat(Base.nameBase, " </br>\n                            NameNonStatic is ").concat(this.nameNonStatic, " </br>\n                            Price is ").concat(this.price, " </br> \n                            Stock is ").concat(this.stock, " </br>\n                         </h2>"));
    };
    return Base;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derived.prototype.printDataOfBase = function () {
        Base.nameBase = 'Hello via static Base!';
        var baseObj = new Base(); //can't use a variable outside of a property in class, thus using inside print()
        baseObj.nameNonStatic = "Hello non static Base!";
        // baseObj.print(); 
        //baseObj is of Base class type so only public access modifiers will be accessed
        var derivedObj = new Derived();
        derivedObj.nameNonStatic = "Hello via non static derived!";
        derivedObj.stock = true;
        // derivedObj.print();
        //derivedObj is of Derived type, so public as well as protected will be accessed
        document.write("<h1>Inside derived print() via Base obj:</h1>");
        baseObj.print();
        Base.nameBase = 'Hello via static Derived';
        document.write("<h1>Inside derived print() via Derived obj:</h1>");
        derivedObj.print();
    };
    return Derived;
}(Base));
Derived.nameBase = "Outside Static";
var outsideDerivedClassObj = new Derived();
outsideDerivedClassObj.nameNonStatic = "Hello via derived Non static, Outside";
//outsideDerivedClassObj.price=1500; //can't access private members of class outside class
//outsideDerivedClassObj.stock = false; //can't be accessed out of class or derived class
document.write("<h1>Via derived outside print():</h1>");
outsideDerivedClassObj.print();
document.write("<h1>Via derived outside printDataOfBase():</h1>");
outsideDerivedClassObj.printDataOfBase();
//Class with constructors
var BaseClass = /** @class */ (function () {
    function BaseClass() {
        document.write('In BaseClass</br>');
    }
    return BaseClass;
}());
var DerivedClass = /** @class */ (function (_super) {
    __extends(DerivedClass, _super);
    function DerivedClass() {
        var _this = _super.call(this) || this; //have to make explicit constructor call, other languages like java does this implicitly!
        document.write('In Derived Class</br></br>');
        return _this;
    }
    return DerivedClass;
}(BaseClass));
var derivedClassObj = new DerivedClass();
//arg no args con
var BaseClassWithArgNoArg = /** @class */ (function () {
    function BaseClassWithArgNoArg(firstNameBase, lastNameBase) {
        if (!(firstNameBase && lastNameBase))
            document.write("Base constructor with no arg called! </br>");
        else
            document.write("In a Base constructor, firstName is : ".concat(firstNameBase, " and lastName: ").concat(lastNameBase, "</br>"));
    } //same message if no arg or even args con is called
    return BaseClassWithArgNoArg;
}());
var MiddleClass = /** @class */ (function () {
    function MiddleClass() {
        document.write('hello from middle!');
    }
    return MiddleClass;
}());
var DerivedClassWithArgNoArg = /** @class */ (function (_super) {
    __extends(DerivedClassWithArgNoArg, _super);
    function DerivedClassWithArgNoArg(firstNameDerived, lastNameDerived) {
        var _this = _super.call(this) || this; //derived class needs to call super class no arg con
        _super.call(this, 'akh naav', 'doyim naav') || this; // dericed class arg con call
        if (!(firstNameDerived && lastNameDerived))
            document.write("</br>Derived constructor with no args called!</br>");
        else
            document.write("</br>In a Derived constructor, firstName is: ".concat(firstNameDerived, " and lastName: ").concat(lastNameDerived, "</br>"));
        return _this;
    }
    return DerivedClassWithArgNoArg;
}(BaseClassWithArgNoArg));
var derivedClassObjWithNoParam = new DerivedClassWithArgNoArg();
/*derived class obj, so derived con will be called, which itself calls (see code) no arg base con and arg base con, and its own con with no arg*/
var derivedClassObjWithParam = new DerivedClassWithArgNoArg('trayim naav', 'courim naav');
/* Again, derived con with arg called, which itself calls (see code) base no arg and base with arg con, and derived with args*/
