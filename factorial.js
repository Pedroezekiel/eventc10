// function factorial(number){
//       let counter = 1
//       for (let index = 1; index <= number; index++) {
//         counter *= index
//       }console.log(counter);
// }
function name(params) {
  if (params == 0) return 1
  else{params * name(params - 1)}
  
}