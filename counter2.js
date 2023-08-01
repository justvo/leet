
var createCounter = function(init) {
    let count = init;
    return  {
        increment:() =>{
            return ++count;
        },
        decrement: () =>{
            return --count;
        },
        reset:() =>{
           return  count = init;
        }
    }
    
};

