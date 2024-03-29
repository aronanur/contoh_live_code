// Competencies: Functions + Loopings
/*
==============
Three Cols Box
==============
Instruksi
=========
Buatlah sebuah function bernama drawThreeColsBox yang menjalankan proses dengan menggunakan looping (boleh dengan while atau for) dan menerima satu parameter bernama height.
Buatlah sebuah angka dengan pola pemunculan tiga angka berurut sebagai berikut:
contoh 1 (drawThreeColsBox(3)):
1 2 3
4 5 6
7 8 9
contoh 2 (drawThreeColsBox(5)):
1 2 3
4 5 6
7 8 9
10 11 12
13 14 15
contoh 3 (drawThreeColsBox(1)):
1 2 3
Note: pola angka harus dimulai dari 1, dan setiap angka diberikan spasi.
Hati-hati, yang ditampilkan adalah sebuah string, bukan angka!
tinggi kotak sesuai dengan nilai variable height!
*/

// SKELETON CODE (Code Sample)

function drawThreeColsBox(height){
    var tempNumber = ''
    var result = ''
    var iteration = 0

    for(i = 0; i < height; i++){
        tempNumber = ''

        for(j = iteration + 1; j <= 3 + iteration; j++){
            tempNumber += j
        }
        result += `${tempNumber}\n`
        iteration += 3
    }
    return result
}

console.log(drawThreeColsBox(3))
console.log(drawThreeColsBox(5))
console.log(drawThreeColsBox(1))

