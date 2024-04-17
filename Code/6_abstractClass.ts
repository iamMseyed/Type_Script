//a class which contains one or more than one abstract classes

abstract class AbstractClass{
// class AbstractClass{
    firstName:string;
    lastName:string;
    age:number;
    address:string;
    public printData():void{
        console.log(`
        firstName is ${this.firstName}
        lastName is ${this.lastName}    
        age is ${this.age}
        address is ${this.address}
        `)
    }
    // public abstract method():void; if the method is abstract, then class has to be abstract
    public abstract abstractMethod():void;
}

class ImplmentedAbsMethod extends AbstractClass{
    firstName='firstName';
    lastName= 'lastName';
    age=20;
    address='Unknown';
     public abstractMethod(): void {
        console.log(`From implemented method!`);
    }
}
let impObj = new ImplmentedAbsMethod();
impObj.printData();
impObj.abstractMethod();