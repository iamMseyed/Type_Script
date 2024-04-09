//NUMBER TYPE:
//primitive type [fixed range]
var signedInt = -45;
var unsignedInt = 45;
var floatNum = 34.45;
var double = 345.55;
var decimal = 3455.33;
var bit = 5;
var ocat = 18222;
var exponent = 2e3; //2*((10)^3);
//to check if number is in number format we use isNaN()
//to convert string to number we use parseInt()
//to convert string to float we use parstFloat()
//STRING TYPE:
var s1 = 'String 1';
var s2 = "String 2";
var s3 = "Hello " + s2 + " how are you?";
console.log(s3);
var mobile = "+(44)(20) 1234 5678";
if (mobile.match(/ \+ \(44\) \([0-9]{2}\) \s [0-9]{4} \s [0-9]{4} /)) {
    console.log("Valid mobile: ".concat(mobile));
}
else
    console.log("Invalid mobile number!");
//BOOLEAN TYPE
var isSet = true;
if (isSet) { //can't check isSet==1, as 1 is true in js
    console.log("".concat(isSet, " is true"));
}
//UNION TYPE
var age = 10; //union of types
age = '10'; //valid
// var int:number = 10;
// int= 'Hello'; //error
var x = 20;
//x = 'hello';// error will take numberic values only
var str;
console.log(str);
