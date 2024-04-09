/*var:
 -- function scope
 -- allows declaration, assignment and initilization
 -- allows shadowing (process or redeclaring or re-initilizing of any variable within a scope)
 -- allows hoisting (before actually declaring we can print the result, after we can declare )
 */
function demoVar() {
    var x = 10;
    if (x == 10) {
        var y = 20;
        var y = 30; //re-declaring and re-initilizing //called shadowing
    }
    console.log("Inside Function (var): x is :".concat(x, " and y is :").concat(y));
}
demoVar();
num = 10;
console.log("Num value is :" + num); //will be printed though type is mentioned later after this
var num;
//at here can't access x and y as both have function scope
//console.log(`Outside function: ${x} and ${y}`); //will throw error
console.log("Can't print x and y var values outside function scope!");
/*let:
  -- block scope
  -- allows declaration, assignment and initilization
  -- not allowing shadowing (process or redeclaring or re-initilizing of any variable within a scope)
  -- not allowing hoisting (before actually declaring we can print the result, after we can declare )
  */
function demoLet() {
    var a = 10;
    if (a == 10) {
        var b = 20;
        b = 30; //allowed redeclartion
        // let b:number=30;// not allowed shadowing.
        // var b:number = 30; //still not allowed, as b is under let scope
        // let b:number = 20; //not allowed hosting
        console.log("Inside block(let)  a is :".concat(a, " and b is :").concat(b));
    }
    console.log("Inside Function (let): a is :".concat(a, " and b is :can't print b which is inside block and can't access outside"));
}
console.log("Outside function(let): Can't access either a or b ");
demoLet();
/*
 Const:
    -- is block scoped
    -- allows only initilization (not declaration and assigning)
    -- not allowing shadowing and hoising
*/
function demoConst() {
    var a = 10;
    // a = 20; //error
    // a = 20;
    // const a:number; //not allowed
    if (a == 10) {
        var b = 30;
        console.log("Value of (const) inside if block a is ".concat(a, " and b is ").concat(b));
    }
    console.log("Value of (const) inside function scope but outside if block a is ".concat(a, " and b is can't print is block level"));
}
console.log("Value of (const) outsite function scope and block scope can't print");
