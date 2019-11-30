// Competencies: Loopings
/*
Competencies: Looping
=============
Number Ladder
=============
Instruksi
=========
Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
Disediakan variable height.
Buatlah sebuah tangga angka dengan pola berikut:
contoh 1 (height = 3):
321
21
1
contoh 2 (height = 5):
54321
4321
321
21
1
contoh 3 (height = 1):
1
tinggi tangga sesuai dengan nilai variable height, dan isi dari tangga adalah angka dari height itu sendiri.
Ketentuan
=========
Wajib menggunakan looping!
*/

function numberLadder(height) {
    var tempNumber = ''
    var result = ''

    for(i = 0; i < height; i++){
        tempNumber = ''
        for(j = height - i; j >= 1; j--){
            tempNumber += j
        }
        result += `${tempNumber}\n`
    }

    return result
}

console.log(numberLadder(3))
console.log(numberLadder(5))
console.log(numberLadder(1))

