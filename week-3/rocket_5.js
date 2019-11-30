/**
 * 
 * 
 * INI YANG TERBARU COBA PELAJARIN INI
 * ============
 * Checkerboard
 * ============
 * 
 * [Instruction]
 * Buatlah sebuah function yang mengembalikan string berupa
 * asterisk yang berbentuk pola seperti papan catur.
 * 
 * [Resctrictions]
 * 1. Result selalu dimulai dari asterisk '*' bukan spasi ' '
 * 2. Function mengembalikan 'Invalid' jika input kurang dari 1
 *    ATAU input bukan number
 */

 function checkerBoard(number) {
    var result = ''
    var tempBoard = ''
    var iteration = 0
    if(typeof number === 'number' && number >= 1){

        for(i = 0; i < number;i++){
            tempBoard = ''

            for(j = iteration + 1; j <= number + iteration; j++){

                if(j % 2 === 0){
                    tempBoard += ' '
                }else{
                    tempBoard += '*'
                }
            }

            result += `${tempBoard}\n`
            iteration += number

        }

        
    }else{
        result = 'Input Invalid'
    }

    return result
 }

 console.log(checkerBoard(5))