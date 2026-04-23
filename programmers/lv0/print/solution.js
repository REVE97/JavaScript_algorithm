/* 문자열 출력하기 */
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input = '';

// rl.on('line', function(line) {
//   input = line;
// }).on('close', function() {
//   str = input;
//   console.log(str);
// });

/* 문자열 반복해서 출력하기 */
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input = [];
// let result = [];

// rl.on('line', function (line) {
//   input = line.split(' ');
// }).on('close', function () {
//   str = input[0];
//   n = Number(input[1]);
    
//   for(let i = 0; i < n; i++) {
//       result += str;
//   }
//   console.log(result);
// });

/* 대소문자 바꿔서 출력하기 */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input = [line];
}).on('close',function() {
  str = input[0];
    
  let result = str.split('');
    
  for(let i = 0; i < result.length; i++) {
    if(result[i] === result[i].toUpperCase()) {
      result[i] = result[i].toLowerCase();
    } else {
      result[i] = result[i].toUpperCase();
    }
  }  
  console.log(result.join(''));
});