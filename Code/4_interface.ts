interface IES4{
    Operator:String;
    Optional?:Number
}

interface IES5 extends IES4{ //extending this interface from IES4
    RestParameter:String
}

interface IES6 extends IES5,IES4{ 
    /*extending this interface from IES5 and IES4. 
    IES5 itself is extending IES4, and this won't throw any error */
    MapDatatype:String
}

let javaScriptLegacy:IES5={
    RestParameter: "Allows multiple Values",
    Operator:"Any Operator",
    Optional:50
}

let javaScriptModern:IES6={
    Operator:"Exponent Operator",
    RestParameter:"Allows multiple Values",
    MapDatatype: "Key Value pair",
    // Optional:30 //no need to constructor as is optional part (?)
}

console.log(`
    JSL RestParameter:${javaScriptLegacy.RestParameter}
    JSL Operator: ${javaScriptLegacy.Operator}
    JSL Optional Number: ${javaScriptLegacy.Optional}
`);
console.log(`
    JSM MapDatatype:${javaScriptModern.MapDatatype}
    JSM Operator: ${javaScriptModern.Operator}
    JSP RestParameter: ${javaScriptModern.RestParameter}
    `);


interface IProduct{ //don't have access modifiers and these need to be implemeneted in implemented class
    Name:string,
    Price:number,
    Qty: number,
    Total():number,
    Print():void
}

// class ProductClass implements IProduct{  //if we implement all methods of interface here
abstract class ProductClass implements IProduct{ //if we don't implement all properties and methods of interface
    public Name: string;
    public Price: number;
    public Qty: number;
    Total(): number {
            return this.Price * this.Qty;
    }
    // Print(): void;

    /* We need to implement all the methods of interface in implementation class, now if we don't
    tsc will throw error, if we don't for that we need to make this method abstract, and the class
    also*/

    abstract Print():void;
}

class Implemeneted extends ProductClass{ //all other information is hidden //abstraction concept
    Name='Nokia 6600';
    Price= 7800;
    Qty=10;
    Total(): number {
        return this.Price * this.Qty;   
    }
    Print(): void {
        document.write(` <h2>=========Product details=======</h2>
            <h3>
                Name: ${this.Name} </br> Price: ${this.Price} </br> Qty: ${this.Qty}
                </br> Total: ${this.Total()}$
            </h3>
        `);
    }
}

let implObj = new Implemeneted();
implObj.Print();


interface OracleInterface{
    driver:string;
    username:string;
    password:string;
    database:string;
}

interface MySQLInterface{
    host:string;
    user:string;
    password:string;
    database:string;
}

interface MongoDBInterface{
    url:string;
}

class DatabaseConnection{
    public Connect<T>(connectionString:T):void{
        document.write('<h2> ===== Connection Details ===== </h2>');
        for(var property in connectionString )
            document.write(`<h4>Property : ${property}, Value: ${connectionString[property]}</br></h4>`);
    }
}

let oracle =  new DatabaseConnection();
oracle.Connect<OracleInterface>({driver:'odbc',username:'abc',password:'pqr',database:'oracleDB'});


let mysql = new DatabaseConnection();
mysql.Connect<MySQLInterface>({host:'anyHost',user:'mno',password:'pqr',database:'mysqlDB'});


let mongoDB = new DatabaseConnection();
mongoDB.Connect<MongoDBInterface>({url:'any URL'});