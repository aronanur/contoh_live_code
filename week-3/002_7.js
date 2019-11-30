// Competencies: Functions
/*
Instruksi
=========
Buatlah beberapa function berikut:
1. multiplication, yang menerima dua parameter berupa num1 dan num2. Function tersebut akan membagi num1 dengan num2 dan mereturn hasil pembagiannya.
  contoh
  ------
  input: division(6, 3)
  output: 2
2. powerMe, yang menerima dua parameter berupa num1 dan num2. Function tersebut akan memangkatkan num1 dengan num2 (num1 dipangkat dengan num2) dan mereturn hasil perpangkatannya.
  Boleh menggunakan looping atau sintaks Math.pow  
contoh
  ------
  input: powerMe(2, 3)
  output: 8
3. mergeStrings, yang menerima empat parameter berupa str1, str2, str3, dan str4. Function akan menggabungkan keempat string tersebut dengan simbol + sebagai pemisah.
  contoh
  -----
  input: mergeStrings('hello', 'world', 'nice', 'day')
  output: 'hello+world+nice+day'
*/

function division(num1, num2){
    return num1 / num2
}

function powerMe(num1, num2){
    return Math.pow(num1, num2);
}

function mergeStrings(str1, str2, str3, str4) {
    return `${str1}+${str2}+${str3}+${str4}`
}

console.log(division(6, 3))
console.log(powerMe(2, 3))
console.log(mergeStrings('hello', 'world', 'nice', 'day'))

