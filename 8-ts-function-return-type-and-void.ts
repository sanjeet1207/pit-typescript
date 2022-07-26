// function return type and void


// if a function is not returning anything then typescript itself infer the return type of function as void
function printNumber(n1: number) {
    console.log("Given number is " + n1);
}

// you can explicitly tell the return type as void if the function is not returning anything
function showAge(n1: number) : void {
    console.log("Your age is "+n1);
}


// function return type cannot be undefined explictly in typescript but you can define the undefined
// return type if it returns but returns nothing.
// but this is rare avoid using this and instead use void return type in such scenario
function add(n1: number): undefined{
console.log("Given number is " + n1);
return;

}

// this function returns number type
function findMyAge(dob: string) : number {
    let age = 3;
    return age;
}


console.log(findMyAge('21-07-2022'));
add(222);
showAge(24);
printNumber(99);

