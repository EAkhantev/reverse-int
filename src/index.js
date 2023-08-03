module.exports = function reverse (n) {
   let numberArr = String(n).split('');

   if (numberArr.slice(-1) == '0') {
      numberArr.pop();
   } 
   
   if (numberArr[0] == '-') {
      numberArr.shift();
   } 

   return Number(numberArr.reverse().join(''));
}
