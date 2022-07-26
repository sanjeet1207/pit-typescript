// never type in typescript - it is used when function never completes or crashes in between


// by default it infer void return type but in such case we can explictly tell never as return type
function generateError(message: string, errorCode: number) {
    throw {message: message, code: errorCode};
    // while(true){}
    
}

function generateError2(message: string, errorCode: number) : never {
    throw {message: message, code: errorCode};
    // while(true){}
    
}

console.log(generateError('This is a internal server error', 500));

console.log(generateError2('This Syntax Error', 300));