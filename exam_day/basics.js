// let p = new Promise((resolve, reject) => {
//     let a = 1+1;
//     if(a == 2)
//         resolve("True");
//     else
//         reject("false");
// });

// p.then((msg) => {
//     console.log(msg + " from resolve");
    
// }, (msg) => {
//     console.log(msg + " from reject"); 
// });

// Step 1: Define asynchronous tasks that return promises
function step1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Step 1 completed");
        resolve("Data from Step 1");
      }, 1000);
    });
  }
  
  function step2(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Step 2 completed with:", data);
        resolve("Data from Step 2");
      }, 1000);
    });
  }
  
  function step3(data) {
    return new Promise((r) => {
      setTimeout(() => {
        console.log("Step 3 completed with:", data);
        r("Final Result");
      }, 1000);
    });
  }
  
  // Step 2: Chain promises
  step1()
    .then((result1) => {
      // result1 contains data resolved by step1
      return step2(result1);
    })
    .then((result2) => {
      // result2 contains data resolved by step2
      return step3(result2);
    })
    .then((finalResult) => {
      // finalResult contains data resolved by step3
      console.log("All steps completed:", finalResult);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
  