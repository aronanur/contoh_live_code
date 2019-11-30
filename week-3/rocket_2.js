// Competency: Function + Looping + Conditional
/*
Instruksi
=========
Buatlah sebuah function bernama drawLadder yang menerima satu parameter bernama row, dan akan menampilkan x ke samping di baris ganjil, dan o di baris genap. Function drawLadder tidak perlu me-return apapun.
Function tidak perlu mengembalikan nilai (tidak perlu ada return).
Contoh 1
--------
input: 3
x
xo
xox
Contoh 2
--------
input: 6
tampilan:
x
xo
xox
xoxo
xoxox
xoxoxo
*/

function drawLadder(row) {
    var temp = ''
    var result = ''

    for(i = 0; i < row;i++){
        temp = ''
        for(j = 0; j <= i; j++){

            if(j % 2 === 0){
                temp += 'x'
            }else{
                temp += 'o'
            }

        }
       result += `${temp}\n`
    }
    return result
}

console.log(drawLadder(3))
console.log(drawLadder(6))
