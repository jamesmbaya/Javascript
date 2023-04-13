// // function fibonacci(200){
// //     return("my numbers are in fibonacci form")
// // }
// // function add(x, y) {
// //     return x + y;
// //   }
// //   console.log(add(2, 3));
// // //   var result = add(10, 10) * 10; // result is 10

  
// // const fibonacci = n => {
// //     let a = 0, b = 1, c = n;
    
//     // for(let i = 2; i <= n; i++) {
//     // //   c = a + b;
//     //   a = b;
//       b = c;
//     }
    
//     return c;
//   };

//   const fibonacci = (n) => {
//     if(n <= 1) {
//       return n;
//     }

//     const fibonacci = n => {
//         if (n <= 1) {
//           return n;
//         }
//         return fibonacci(n - 1) + fibonacci(n - 2);
//       };

//       let cache = {};

// const fibonacci = n => {
//   if (n <= 1) {
//     return n;
//   }
  
//   if(cache[n]) {
//     return cache[n];
//   }
  
//   const result = fibonacci(n - 1) + fibonacci(n - 2);
  
//   cache[n] = result;
  
//   return result;
// };

// const getFibonacciIndex = n => {
//     if (n <= 1) {
//       return n;
//     }
     
//     let a = 0, b = 1, c = 1, result = 1;
    
//     while (c < n) {
//       c = a + b;
//       a = b;
//       b = c;
//       result++;
//     }
    
//     return result;
//   };
  
//     const result = [0, 1];
  
//     for (let i = 2; i <= n; i++) {
//       result[i] = result[i - 2] + result[i - 1];
//     }
  
//     return result[result.length - 1];
//   }


function fibonacci(n) {
    if (n === 0 || n === 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
 }  
  console.log( fibonacci(11))

    function fibonacci(n) {
      if(n ===1 || n === 2){
        return n;
      } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
      }
      console.log(fibonacci(22))
 }
    
//  function fibonacci(n) {
//   if(n ===1 || n === 2 || n ===3){
//     return n;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2) + fibonacci(n - 3);
//   }
//   console.log(fibonacci(23))
// }
