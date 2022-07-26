// function as type

// this function takes one parameter of type number and returns number type
function function_type_example(number1 : number): number {
    return number1;
}


// using function as type
// below code will not complain during compilation but in run time it will show undefined

// let someVariable : Function;
// someVariable = function_type_example;
// console.log(someVariable(2));

// here is how it should be done

let someVariable : (n1:  number) => number; 

someVariable =  function_type_example;

console.log(someVariable(33));

