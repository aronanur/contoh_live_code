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
oo
xxx
Contoh 2
--------
input: 6
tampilan:
x
oo
xxx
oooo
xxxxx
oooooo
*/

function drawLadder(height){
    var tempNumber = ''
    var result = ''

    for(i = 0; i < height; i++){
        tempNumber = ''

        for(j = 0; j <= i; j++){

            if(i % 2 === 0){
                tempNumber += 'x'
            }else if(i % 2 !== 0){
                tempNumber += 'o'
            }

        }

        result += `${tempNumber}\n`

    }

    return result
}

console.log(drawLadder(3))
console.log(drawLadder(6))
console.log(drawLadder(1))

