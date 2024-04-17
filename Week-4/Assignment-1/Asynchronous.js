// A setTimeout()
function delayedResult(n1, n2, delayTime, callback) {
  // your code here
  setTimeout(() => {
    const result = n1 + n2;
    callback(result);
  }, delayTime);
}

delayedResult(4, 5, 3000, function (result) {
  console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds
   
delayedResult(-5, 10, 2000, function (result) {
  console.log(result);
}); // 5 (-5+10) will be shown in the console after 2 seconds


// B promise
function delayedResultPromise(n1, n2, delayTime) {
  // your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = n1 + n2;
      if (typeof result === 'number') {
        resolve(result);
      } else {
        reject('please enter number!');
      }
    }, delayTime);
  });
}

delayedResultPromise(4, 5, 3000).then(console.log);
// 9 (4+5) will be shown in the console after 3 seconds


// C async / await
async function main() {
  /* your code here, you should call delayedResultPromise here 
     and get the result using async/await.*/

  try {
    const result = await delayedResultPromise(5, 6, 1000);
    console.log(result);
  } catch (error) {
    console.log('Error: ', error);
  }
}

main(); 
// result will be shown in the console after <delayTime> seconds