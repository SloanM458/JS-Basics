for( var i=1; i<=100; i++){
    if(i% 15 === 0){
        console.log("FizzBuzz");
    }
    else if(i% 5 === 0){
        console.log("Buzz");
    }
    else if(i% 3 === 0){
        console.log("Fizz");
    }
    else{console.log(i)};
}

// This loop organizes with priority in mind. 15 is at the top or else
// it would print only % 5 0 and % 3 0