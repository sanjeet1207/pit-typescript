// unknown type in typescript
// unknow type is more restrictive or less flexible than any type in typescript
// while using unknow we need to write some extra logic to check the type

let userInput: unknown; // here we are not sure what type the userInput will be - it can be number, string, tuple, object, etc
// so it can store any to value 
userInput = 3; // storing number type
userInput = "Hello" // storing string type

console.log(userInput);


let userName: string;
// try assing this variable to unknow type variable
// userName = userInput; // it will show error - Type 'unknown' is not assignable to type 'string'.
// to avoid this we can write some extra type checking logic

if (typeof userInput === 'string'){
    userName = userInput;
}