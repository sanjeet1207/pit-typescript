// example of union in typescript - represented by | i.e pipe

function combine(input1: number | string, input2: number | string){
    let result: number | string;
    if (typeof input1==='number' && typeof input2==='number') {
        result = input1 + input2;
    }else{
        return input1.toString() + " " + input2.toString();
    }
}


console.log(combine(2,3));
console.log(combine('Sanjeet','Kumar'));
console.log(combine('Sanjeet', 22));