/*
=============
Number Ladder
=============
[INSTRUCTION]
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
Wajib menggunakan looping!
*/

// SKELETON CODE (Code Sample)
var height = 1

for(i = 0; i < height; i++){
    var numberContainer = ''

    for(j = height - i; j >= 1; j--){
        numberContainer += j
    }
    console.log(numberContainer)
}