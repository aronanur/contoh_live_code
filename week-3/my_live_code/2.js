/**
 * =============
 * Word Triangle
 * =============
 * 
 * Instruction
 * -----------
 * Tulislah kode untuk menampilkan kata dan membentuk segitiga seperti berikut:
 * 
 * Example
 * -------
 * @input = 'yusuf'
 * @output =
 * y
 * yu
 * yus
 * yusu
 * yusuf
 */

var input = 'adiel'
var tempString = ''
// Write your code here

for(i = 0; i < input.length; i++){
    tempString = ''
    for(j = 0; j <= i; j++){
        tempString += input[j]
    }
    console.log(tempString)
}