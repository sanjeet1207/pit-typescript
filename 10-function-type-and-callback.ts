// callback in function type


// this function takes 2 parameters of type number and third parameter of 
// type function which take 1 parameter of type number and returns coid
function addAndHandler(n1: number, n2: number, callback: (n3: number) => void){
    const result = n1 + n2;
    callback(result);
}

function showResult(result: number){
    console.log("Sum is " + result);
}

// one way is to have anonymous function
addAndHandler(2,2,(result)=>{
    console.log(result);
})

// another way to use explict function in callback
// addAndHandler(3,4,showResult(result))

// note: callback functions can return something, even if the argument on which they're passed 
// does NOT expect a returned value.
// example
// the below code will compile correctly
function sendRequest(data: string, cb: (response: any) => void) {
    // ... sending a request with "data"
    return cb({data: 'Hi there!'});
  }
   
  sendRequest('Send this!', (response) => { 
    console.log(response);
    return true;
   });
  
  
  
  