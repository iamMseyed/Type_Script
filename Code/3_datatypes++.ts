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

// var anyName:String|null = prompt("Enter any Name"); 
// we need to provide null type also, coz if user cancels, null will be stored in anyName
var str:String;
console.log(str); //undefined



//Non-Primitive type

//Array Type : used to reduce overhead and complexity

var arr1:number[]=[1,2,3,4,5];//number array
//var arr2:number[]=[2,3,4,'a'];//error
var arrAny:any[] = [1,4,'a',`String`]; //should be any type
var arrCon:any[] = new Array(1,2,3,4); //any type
//var arrCon1:any[] = new Array(1,'a',3) //error as new Array() follows first element which here is 1 and is int type though any is selected

var arrCon2:any[] = new Array();
arrCon2[0]= 1; 
arrCon2[1]= 'a';
arrCon2[2]= 'String';

/*with new Array() type if we have any type, while declaring the first element in new Array() 
will be considered, but intilizing phase will take any value*/

var arrNew:String[]|number[] = []; //declaring and assigning of memory
arrNew[0]=1;
arrNew[1]='a';
arrNew[2]=0;
arrNew[3]='String';

var multipleValues:any[] = [1, "Nokia",20000];
var id = multipleValues[0];
var brand = multipleValues[1];
var price = multipleValues[2];

var[ID, BRAND, PRICE] = multipleValues; //take values directly called Array de-structing

var collection:any[] =[1, 'this',[1,2,3],function(){console.log("Hello")}];
console.log("for in will print index");
for(var elementIn in collection){
    console.log(elementIn);
}

console.log("for of will print values");
for(var elementOf of collection){
    console.log(elementOf);
}

//Objects in TS
//keys are always string, values may be any type say array, string, function and counting

let tv:{Name:String, Price:number, Quantity:number, Total:any,Print:any} = //this we need to implement at any cost, else it will throw error
{
    Name:"NOKIA TV",
    Price: 20000,
    Quantity: 15,
    Total:function(){
        return this.Price * this.Quantity;
    },
    Print:function(){
        console.log(`Details of the product:
            Name: ${this.Name}, 
            Price: ${this.Total()};
            Quantity: ${this.Quantity}
            `)
    }
}

tv.Print();

//optional keys and values
let checking:{Name:String, Age?:Number, Print:any}= //Age we don't necessarly need to implement, if we do, it will take if not, it won't through any error
{
    Name:"Any Name",
    Print:function(){
        console.log(`Name is ${this.Name} and age is ${this.Age}`);
    }
}
checking.Print();

//values with arrays, objects, and functions

let anyType:{Source:String, Rating:{Rate:number,Total:number},Products:any[],Print:any} =
{
    Source:"Flipkart",
    Rating:{
        Rate:3,
        Total:100
    },
    Products:["Product 1","Product 2"],
    Print:function(){
        console.log(
            `
                Source: ${this.Source}
                Rating: Rated at: ${this.Rating.Rate}, Rated By:${this.Rating.Total}
                Products: ${this.Products.toString()}
            `
        )
    }
}
anyType.Print();

//Array of objects:
let arrayOfObj:{Name:String, Age:Number}[]=[
    {Name:"Name one", Age:21},
    {Name:"Name Two", Age:35},
    {Name:"Name Three", Age:29},
]
for(let arrayOb of arrayOfObj ){
    console.log(arrayOb);
}

//Map type
/*
  --objects have default key as String, and can't be changed but in case of Map, we have any type of key what we want
  --Map is faster than objects
  --Map have implicit methods like set(), get(), has(), clear(), key(), value(),delete()  
  --Map is schema less, while object is structured
*/


let mapType:Map<number,string>= new Map(); //key can be only number, and value any string 
mapType.set(1,`hello`);
mapType.set(2,`Hey`);

console.log(mapType.get(1));
console.log(mapType.get(2));

//Date type
let date:Date= new Date(); //takes current date
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

//Symbol
//to configure hidden fields in ts

let productId:symbol = Symbol();

let product:any={
    [productId]:1, //should be of type string, number, any or symbol
    productName:`Product 1`,
    price:2435.3
};

for(let prod in product){
    console.log(prod);
    //[productId] we can't get by iterators
}
console.log(product[productId]); //we can print symbol type by using square bracket with obj name but not with iterators

//functions

function funName():void{
    console.log(`this function doesn't return any value!`);
}
funName();

function retVal(username:string):string{
    return `Hi ${username}`;
}
console.log(retVal(`anyName`));