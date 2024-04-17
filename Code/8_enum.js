var EnumProperties;
(function (EnumProperties) {
    EnumProperties[EnumProperties["NotFound"] = 0] = "NotFound";
    EnumProperties[EnumProperties["Found"] = 1] = "Found";
    EnumProperties[EnumProperties["Exit"] = 2] = "Exit";
})(EnumProperties || (EnumProperties = {}));
console.log("=== All Enum value and Keys===");
for (var val in EnumProperties) {
    console.log("in Enum val: ".concat(val));
    console.log("in enum val prop: ".concat(EnumProperties[val]));
}
var valExp;
(function (valExp) {
    valExp[valExp["a"] = 10] = "a";
    valExp[valExp["b"] = 11] = "b";
    valExp[valExp["c"] = 12] = "c";
    valExp[valExp["d"] = 13] = "d";
    valExp[valExp["e"] = 25] = "e";
    valExp["anyString"] = "any String";
})(valExp || (valExp = {}));
//enum of number, string, and ambient type
/*
In a normal enum, TypeScript generates an object with properties for each enum member at runtime.
This object stores the names of the enum members as keys and their corresponding numeric values.

In contrast, with a const enum, TypeScript doesn't create such an object at runtime. Instead,
it directly substitutes the numeric values wherever the enum members are referenced in your
code during compilation. This can lead to more efficient code with potentially smaller output
file sizes because there's no need for an enum object at runtime.
*/
var SimpleEnum;
(function (SimpleEnum) {
    SimpleEnum[SimpleEnum["Success"] = 0] = "Success";
    SimpleEnum[SimpleEnum["Error"] = 1] = "Error";
    SimpleEnum[SimpleEnum["Pending"] = 2] = "Pending";
})(SimpleEnum || (SimpleEnum = {}));
console.log("Simple Enum: ".concat(SimpleEnum.Success));
console.log("Simple Error: ".concat(SimpleEnum.Error));
console.log("Simple PENDING: ".concat(SimpleEnum.Pending));
console.log("const Enum: ".concat(0 /* ConstEnum.Success */));
console.log("ConstEnum Error: ".concat(1 /* ConstEnum.Error */));
console.log("ConstEnum pending: ".concat(2 /* ConstEnum.Pending */));
var hetroEnum;
(function (hetroEnum) {
    hetroEnum["Value1"] = "hello";
    hetroEnum[hetroEnum["Value2"] = 2] = "Value2";
    hetroEnum[hetroEnum["Value3"] = 3] = "Value3";
    /*
        Called Ambient Enum .this will have value of previous value +1, but remember previous value should be numeric
    */
    hetroEnum["Value4"] = "hi";
    //Value5,  //this won't work as previous value is string type
})(hetroEnum || (hetroEnum = {}));
