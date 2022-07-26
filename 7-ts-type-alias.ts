// type alias in typescript
// it used to make alias of types which is comporised of union etc

type Combinable =  number | string;
type Expandable = 'as-number' | 'as-text';

function type_alias(input1: Combinable, input2: Combinable, resultConversion: Expandable){
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result =  +input1 + +input2;
    }
    else{
        result =  input1.toString() + input2.toString();
    }
    return result;
}

// type alias as object
type User = {
    name: string,
    age: number,
}

function greet(user: User) {
    console.log("Hello ", user.name);
}

function isApplicable(user: User) {
    if(user.age <= 28){
        console.log("User "+ user.name + "having age " + user.age);
    }
    
}

console.log(type_alias(2,3,'as-number'));
console.log(greet({
    name: 'Sanjeet Kumar',
    age: 22
}));

console.log(isApplicable(
    {
        name: 'Sonu kumar',
        age: 22
    }
));