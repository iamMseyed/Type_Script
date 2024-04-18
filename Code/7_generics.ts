class GenericType{
    public genericMethod<T>(anyValue:T):void{
        document.write(`<h3>Data type of ${anyValue} is ${typeof anyValue}</br> </h3>`);
    }
}

let genericTypeObj = new GenericType();

genericTypeObj.genericMethod('Name');
genericTypeObj.genericMethod(123);
genericTypeObj.genericMethod<number>(123);
genericTypeObj.genericMethod(12.3);
genericTypeObj.genericMethod(true);
let arr = [1,2,3,4,5];
genericTypeObj.genericMethod(arr);
let json = {
    name:'hey',
    addr:'any',
    mob:12345,
    isActive:true
}
genericTypeObj.genericMethod(json); 

class StudentInfo<T,S>{
    static a:number=1;
    private _studentId:T;
    private _studentName:S;
    constructor(_studentId:T,_studentName:S){
        this._studentId=_studentId;
        this._studentName=_studentName;
    }
    public display():void{
        document.write(
            `
            Student with Id as ${typeof(this._studentId)} and Name as ${typeof(this._studentName)}, 
            details ${StudentInfo.a++}  are:
            Student Id: ${this._studentId},
            Student Name: ${this._studentName}
            </br>
            `);
    }
}

let stuInfoObj = new StudentInfo<number,string>(1,'AnyName');
stuInfoObj.display();

let studInf = new StudentInfo<string,string>('123ABC','anyName123');
studInf.display();

let stIn = new StudentInfo<boolean,number>(false,1);
stIn.display();