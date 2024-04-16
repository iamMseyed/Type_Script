let username:string=prompt("Enter username");
let userPass:string=prompt("Enter password");
let prdctName:string=prompt("Enter product name");
//take input from user

class Product{
    /*let a = 10; //can't have varaibles here, only a constructor, method, accessor, 
    or property is expected*/
    
    private _pruName:string; /* _ mostly used to indicate a private member. Without this 
    can work, but to let others know take this a private member*/

    get prodName(){ //getter with get keyword
        return this._pruName;
    }

    set productName(newProd:string){ //setter with set keyword
        if(username=='abc' && userPass=='pqr'){
            this._pruName=newProd;
        }
        else
            document.write("<h1>You are not authorized to add data!</h1>");
    }
}

let ob = new Product();

ob.productName = prdctName; //set productName
if (ob.prodName) { //check if prodName is set
    document.write(`<h1> Product Added is: ${ob.prodName}</h1>`);
}

class Base{
    public static nameBase:string;
    public nameNonStatic:string;
    private price:number = 1500;
    protected stock:boolean;
    public print(){
        document.write(`<h2>
                            Static Name is ${Base.nameBase} </br>
                            NameNonStatic is ${this.nameNonStatic} </br>
                            Price is ${this.price} </br> 
                            Stock is ${this.stock} </br>
                         </h2>`);
    }
}

class Derived extends Base{

    public printDataOfBase(){
        Base.nameBase='Hello via static Base!';
        let baseObj = new Base() //can't use a variable outside of a property in class, thus using inside print()
        baseObj.nameNonStatic=`Hello non static Base!`;

        // baseObj.print(); 
        //baseObj is of Base class type so only public access modifiers will be accessed
        
        let derivedObj = new Derived(); 
        derivedObj.nameNonStatic = `Hello via non static derived!`;
        derivedObj.stock = true;
        // derivedObj.print();
        //derivedObj is of Derived type, so public as well as protected will be accessed

        document.write(`<h1>Inside derived print() via Base obj:</h1>`);
            baseObj.print();
        Base.nameBase='Hello via static Derived'
        document.write(`<h1>Inside derived print() via Derived obj:</h1>`);
            derivedObj.print();
    }
}

Derived.nameBase = `Outside Static`
let outsideDerivedClassObj = new Derived();
outsideDerivedClassObj.nameNonStatic = "Hello via derived Non static, Outside";
//outsideDerivedClassObj.price=1500; //can't access private members of class outside class
//outsideDerivedClassObj.stock = false; //can't be accessed out of class or derived class

document.write(`<h1>Via derived outside print():</h1>`);
     outsideDerivedClassObj.print();
document.write(`<h1>Via derived outside printDataOfBase():</h1>`);
     outsideDerivedClassObj.printDataOfBase();



//Class with constructors

class BaseClass{
    constructor(){
        document.write('In BaseClass</br>');
    }
}

class DerivedClass extends BaseClass{
    constructor(){
        super(); //have to make explicit constructor call, other languages like java does this implicitly!
        document.write('In Derived Class</br></br>');
    }
}

let derivedClassObj = new DerivedClass();

//arg no args con

class BaseClassWithArgNoArg{
    constructor(); //no arg
    constructor(firstNameBase:string, lastNameBase:string); //arg const

    constructor(firstNameBase?:string, lastNameBase?:string){
        if(! (firstNameBase && lastNameBase))
            document.write(`Base constructor with no arg called! </br>`);
        else    
            document.write(`In a Base constructor, firstName is : ${firstNameBase} and lastName: ${lastNameBase}</br>`);
    } //same message if no arg or even args con is called

}

class MiddleClass{
    constructor(){
        document.write('hello from middle!');
    }
}
class DerivedClassWithArgNoArg extends BaseClassWithArgNoArg{//, MiddleClass{ //multiple inheritance not suppored due to ambiguity, which is consturctor call ambiguity (deadlock problem)
    constructor(); // no arg
    constructor(firstNameDerived:string, lastNameDerived:string); //arg const

    constructor(firstNameDerived?:string, lastNameDerived?:string){
        super(); //derived class needs to call super class no arg con
        super('akh naav','doyim naav'); // dericed class arg con call

        if(!(firstNameDerived && lastNameDerived))
            document.write(`</br>Derived constructor with no args called!</br>`);
        else
            document.write(`</br>In a Derived constructor, firstName is: ${firstNameDerived} and lastName: ${lastNameDerived}</br>`);
    }
}

let derivedClassObjWithNoParam = new DerivedClassWithArgNoArg(); 
/*derived class obj, so derived con will be called, which itself calls (see code) no arg base con and arg base con, and its own con with no arg*/
let derivedClassObjWithParam  = new DerivedClassWithArgNoArg('trayim naav','courim naav');
/* Again, derived con with arg called, which itself calls (see code) base no arg and base with arg con, and derived with args*/
