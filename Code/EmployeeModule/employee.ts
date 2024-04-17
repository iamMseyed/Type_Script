import { iPerson } from "../PersonModule/personContracts"; //imported this module from another file(interface)
class Employee implements iPerson{
    pId=1;
    pName='Any Name';
    pAge: 20;
    public printData():void{
        console.log(
            `Person id: ${this.pId}
             Person Name: ${this.pName}
             Person Age: ${this.pAge}
            `
        );
    }
}

let empObj = new Employee();
empObj.printData();