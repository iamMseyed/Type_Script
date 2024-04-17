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