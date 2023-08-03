/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    return new Promise((res,rej)=>{
        promise1.then((v1)=>{
            promise2.then((v2)=> res(v2+v1))
        })
    })
 };
 
 /**
  * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
  *   .then(console.log); // 4
  */