// // typescript literal - 
// Literal Type - is based on the core type like string but on the top of that you have fixed values for that.

// example:
// resultConversion: 'as-number' | 'as-text'

function combineValues(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text'){

    if( typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        return +input1 + +input2;
    }
    else{
        return input1.toString() + input2.toString();
    }
}

console.log(combineValues(2,3,'as-number'));
console.log(combineValues(2,'3','as-text'));
console.log(combineValues(2,3,'as-text'));