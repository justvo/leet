var reduce = function(nums, fn, init) {

    nums.forEach((n) => {
      init = fn(init, n); 
    });
    return init;
  };