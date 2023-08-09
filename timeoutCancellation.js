var cancellable = function(fn, args, t) {
    const timeOut = setTimeout(()=>{
        fn(...args)
    },t)
    return function(){
        clearTimeout(timeOut);
    }
    
};