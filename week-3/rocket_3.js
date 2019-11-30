// Competencies: Functions + Loopings
/*
==============
Three Cols Box
==============
Instruksi
=========
Buatlah sebuah function bernama drawSymbolicColsBox yang menjalankan proses dengan menggunakan looping
(boleh dengan while atau for) dan menerima satu parameter bernama height.
Buatlah sebuah pola pemunculan simbol @, $, dan * di log (dengan console.log()),
dimana @ mewakili kelipatan ganjil, $ kelipatan genap, dan * khusus baris ganjil kelipatan 3. berurut sebagai berikut:
contoh 1 (drawThreeColsBox(3)):
@ $ *
$ @ *
@ $ *
contoh 2 (drawThreeColsBox(5)):
@ $ * $ @
* @ $ * $
@ * @ $ *
$ @ * @ $
* $ @ * @
contoh 3 (drawThreeColsBox(1)):
@
Note: pola symbol harus dimulai dari 1, dan setiap symbol diberikan spasi.
tinggi kotak sesuai dengan nilai variable height!
*/

// SKELETON CODE (Code Sample)

function drawSymbolicColsBox(height) {
    var tempSymbol = ''
    var result = ''
    var iteration = 0

    for(i = 0; i < height; i++){
        tempSymbol = ''
        for(j = iteration + 1; j <= height + iteration; j++){
            if(j % 3 === 0){
                tempSymbol += '*'
            }else if(j % 2 === 0){
                tempSymbol += '$'
            }else{
                tempSymbol += '@'
            }
        }
        result += `${tempSymbol}\n`
        iteration += height
    }
    return result
}

console.log(drawSymbolicColsBox(3))
console.log(drawSymbolicColsBox(5))
console.log(drawSymbolicColsBox(1))

