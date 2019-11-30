/**
 * ============
 * Diagon Alley
 * ============
 * 
 * Instruction
 * -----------
 * Buatlah sebuah function yang dapat menampilkan input secara diagonal seperti berikut:
 * 
 * Example
 * -------
 * @input = 'Hacktiv8'
 * @output =
 * H
 *  a
 *   c
 *    k
 *     t
 *      i
 *       v
 *        8
 */

function diagonAlley(str) {
  var tempPrefix = ''
  var result = ''

  for(i = 0; i < str.length;i++){
    tempPrefix = ''
    for(j = 0; j <= i; j++){

      if(j === i){
        tempPrefix += str[j]
      }else{
        tempPrefix += ' '
      }
    }

    result += `${tempPrefix}\n`

  }

  return result

}

console.log(diagonAlley('yusuf'))
/*
y
 u
  s
   u
    f
*/
console.log(diagonAlley('adiel'))
/*
a
 d
  i
   e
    l
*/
console.log(diagonAlley('tony'))
/*
t
 o
  n
   y
*/
console.log(diagonAlley('Hacktiv8'))
/*
t
 o
  n
   y
*/