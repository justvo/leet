/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
    return new Promise((resolve, reject) => {
      let results = [];
      let count = 0;
      functions.forEach((func, idx) => {
        func()
          .then((res) => {
              results[idx] = res
              count++
              if (count === functions.length) {
                resolve(results)
              }
          })
          // for rejects
          .catch(reject)
      })
    });
  };
  
  /**
   * const promise = promiseAll([() => new Promise(res => res(42))])
   * promise.then(console.log); // [42]
   */