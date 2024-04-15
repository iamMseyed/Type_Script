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
