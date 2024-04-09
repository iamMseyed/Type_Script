//NUMBER TYPE:
//primitive type [fixed range]
var signedInt:number = -45;
var unsignedInt:number = 45;
var floatNum:number = 34.45;
var double:number = 345.55;
var decimal:number = 3455.33;
var bit:number = 0b101;
var ocat:number =0o43456;
var exponent:number= 2e3; //2*((10)^3);

//to check if number is in number format we use isNaN()
//to convert string to number we use parseInt()
//to convert string to float we use parstFloat()


//STRING TYPE:
var s1:String = 'String 1';
var s2:String = "String 2";
var s3:String = "Hello " + s2 + " how are you?";
console.log(s3);

var mobile:String =  "+(44)(20) 1234 5678";
if(mobile.match(/ \+ \(44\) \([0-9]{2}\) \s [0-9]{4} \s [0-9]{4} /)){
    console.log(`Valid mobile: ${mobile}`)
}else
    console.log("Invalid mobile number!");



//BOOLEAN TYPE
var isSet:boolean = true;
if(isSet){ //can't check isSet==1, as 1 is true in js
    console.log(`${isSet} is true`);
}

//UNION TYPE

var age:number|String = 10; //union of types
age = '10'; //valid

// var int:number = 10;
// int= 'Hello'; //error

var x = 20;
//x = 'hello';// error will take numberic values only

//null vs Undefined

//null: specifies that there is no value provided into reference at runtime
//undefined: specifes that there is no value provided into referenct during compile time

var anyName:String|null = prompt("Enter any Name"); 
// we need to provide null type also, coz if user cancels, null will be stored in anyName
var str:String;
console.log(str); //undefined

