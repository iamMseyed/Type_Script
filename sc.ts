var x1:number=10;
console.log(x1);

var n1:number=10.3
console.log(n1);

var x2:string= "Mob";
console.log(x2);

var x3:boolean= true;
console.log(x3);

var x4:any = 100;
console.log(x4);

var x5:any = true;
console.log(x5);

var x6:any = "Hello";
console.log(x6); 

var obj = {
    "name":"xyz",
    "age":"2900",
    "passion":"development"
}

console.log(obj);

console.log(obj.name);
console.log(obj.age);
console.log(obj.passion);

var arr:any[] = [3,5,29,4,"4"];
console.log(arr);
// var i:number;
for(var i:number=0;i<arr.length;i++){
    console.log(arr[i])
}

console.log(funName(12,31));

function funName(x1:number, x2:number) :number{
    return x1+x2;
}
//optional parameters
function funOptional (x1:number, x2?:number): void{
    if(isNaN(x2))
         console.log("Value of x1:"+x1);
    else
        console.log(x1+x2);
}
funOptional(10);
funOptional(10,20);

var n1:number;
var n2:number;

//default parameter
function calcuate(n1, n2=10):void{
    console.log(n1+n2)
}
calcuate(1);
calcuate(10,5);
var i : number;
function printArrayValue(arr:any[]):void{
    for(i = 0; i<arr.length;i++){
        console.log(arr[i]);
    }
}
var arr:any[] = [1,2,3,4,5,"mobashir","mehra",1.3];
printArrayValue(arr);


//rest parameter with normal values 
let sum: number=0;
function fnWithDotOnly(...values:any[]):void{
    for(var i:number= 0; i< values.length;i++){  
        sum=sum+values[i];
    }
    console.log(sum);
}
fnWithDotOnly(1,2,3,4,5);  


//rest parameter with normal values 
function fnWithVarAndDot(j:String,...values:any[]):void{
    for(var i:number= 0; i< values.length;i++){  
        sum=sum+values[i];
    }
    console.log(sum);
    console.log(`Value of string is ${j}`);
}
fnWithVarAndDot('C',2,3,4,5);      

//arrow function with return keyword written
var cal=(x1:number, x2:number):number=>{
    return x1+x2;
};
console.log(`Value via arrow function is: ${cal(10,20)}`);

////arrow function without return keyword written
var noReturnWritten=(x1:number, x2:number):number=>x1+x2;
console.log(`No return written, still returning: ${noReturnWritten(1,2)}`);

//arrow function to return value 100
var ret100=()=>{
    return 100;
}
console.log(ret100());

//ENUM : constants
enum EnumName{
    SUNDAY,
    MONDAY,
    TUESDAY,
    FRIDAY
}

console.log(`Enum is (with concat()): ${EnumName}`); //printing as [object Object]
console.log(EnumName); //printing EnumName as key value. first key value, then value key
console.log("Enum is: "+EnumName); //printing as [object Object]

for (var enumValue in EnumName) {
    // console.log(Number(enumValue));//put all in numbers only
    if (isNaN(Number(enumValue))) { //take only those which have just NaN type
        console.log(enumValue); //print only value
    }
    
}

//class with constructor initilizing non static variables
class ClassNameCon{
     x:number;
     y:number;

      constructor(){
        this.x=10
        this.y=20;
     }
}
var classNameCon = new ClassNameCon();
console.log(classNameCon.x);
console.log(classNameCon.y);

//class with constructor initilizing non static variables
class ClassNameMethod{
    x:number;
    y:number;
    static z:number;

     init():void{
       this.x=30;
       this.y=40;
       ClassNameMethod.z=20;
    }
}
var classNameMethod = new ClassNameMethod();
classNameMethod.init();
console.log(classNameMethod.x);
console.log(classNameMethod.y);
console.log(ClassNameMethod.z);

//constructor with argument

class ClassWithParCon{
    x:number;
    y:String;
    static z:number;
    constructor(a:number,b:String,c:number){
        this.x=a;
        this.y=b;
        ClassWithParCon.z=c;

    }
}
var classWithParCon = new ClassWithParCon(1,'c',1);
console.log("ns x: "+classWithParCon.x);
console.log("ns y: "+classWithParCon.y);
console.log("s z: "+ClassWithParCon.z);

class ClassOnly{
    xx:number = 1;
    yy:string = 'c';
}
var classOnly = new ClassOnly();
// console.log("xx "+this.xx); //error/undefined
// console.log("yy: "+ this.yy); //error/undefined
console.log("xx "+classOnly.xx); 
console.log("yy: "+ classOnly.yy)


class ClassMulCon{
    x:number;
    y:number;
    constructor(a:number){
        this.x=a;
        console.log(this.x);
    }
    //not allowed constructor/method overloading
    // constructor(a:number, b:number){} 
    init(a:number){
        this.x=a;
        console.log(this.x);
    }
    // init(a:number,b:number){this.x=a;this.y=b;}
}
var classMulCon = new ClassMulCon(12);
classMulCon.init(12);

class ClassWithoutNew{
    x:any;
    y:any;
    funName(){};
}
/*object literal notation (alais of new keyword)
Though we can add function, and use key without quotes
*/
var classWithoutNew={
    x:5,
    y:10,
    funName:function(){
        console.log("wtf")
    }
};

console.log(classWithoutNew.x);
console.log(classWithoutNew.y);
/*this is json which is subset of object literal notation, though we can key without quotes, and use function 
here too, but it is not recommened to use. JSON is mostly used to transfer data between different technologies
*/
var obj1 = {
    name:"xyz",
    "age":"2900",
    "passion":"development",
    greet:function(){
        console.log("hello")
    }
}

console.log("json age:"+obj1.age);
console.log("json name :"+obj1.name);
console.log("json passion:"+obj1.passion);
console.log("json fun :"+obj1.greet);


//interface

interface interNoPar{
    call():void;
}

interface interWithPar{
    name(val:String):void;
}

interface interWithFields{
    x:number;
    y:string;
}

class ImplClass implements interWithFields,interNoPar, interWithPar{

    readonly x=17;
    y="mehra";
    call():void{
        console.log("implementation of interNoPar interface");
    }

    name(val:String) :void{
        console.log("implementation of interWithPar interface having value: "+val);
    }
    printValue():void{
        console.log("value of x is: "+this.x);
        console.log("value of y is: "+this.y);
    }
}
var implClassObj = new ImplClass();
implClassObj.printValue();
implClassObj.call();
implClassObj.name("Mob");

// implClassObj.x=11; //readonly
implClassObj.y="g";
implClassObj.printValue();
