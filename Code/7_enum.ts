enum EnumProperties{
    NotFound,
    Found,
    Exit
}

console.log("=== All Enum value and Keys===")
for(var val in EnumProperties){
    console.log(`in Enum val: ${val}`);
    console.log(`in enum val prop: ${EnumProperties[val]}`);
}

enum valExp{
    a=10,
    b,
    c,
    d,
    e=c+d,
    anyString="any String",
}
//enum of number, string, and ambient type



enum SimpleEnum{
    Success,
    Error,
    Pending
}
console.log(`Simple Enum: ${SimpleEnum.Success}`);
console.log(`Simple Error: ${SimpleEnum.Error}`);
console.log(`Simple PENDING: ${SimpleEnum.Pending}`);

//Const enums values are inlined at compile time rather than runtime.
const enum ConstEnum{
    Success,
    Error,
    Pending
}
console.log(`const Enum: ${ConstEnum.Success}`);
console.log(`ConstEnum Error: ${ConstEnum.Error}`);
console.log(`ConstEnum pending: ${ConstEnum.Pending}`);
enum hetroEnum{ //hetroEnum is that enum which has both string and numeric values
    Value1='hello',
    Value2=2,
    Value3, 

    /*
        Called Ambient Enum .this will have value of previous value +1, but remember previous value should be numeric
    */

    Value4='hi',
    //Value5,  //this won't work as previous value is string type
}