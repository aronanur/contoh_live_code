/*
================
Poin Calculator
================

[INSTRUCTIONS]
Kamu diminta menghitung poin dari sebuah mendali yang didapat dalam sebuah pertandingan.
poinCalculator adalah sebuah function yang menerima satu parameter berupa string.
function tersebut akan menghitung jumlah Gold aka emas (G), Silver aka perak (S) dan Bronze aka perunggu (B) dan function akan mereturn jumlah masing2 mendali dan menghitung total poin secara keseluruhan.
Adapun ketentuannya:
Gold (G) = 2
Silver (S) = 1
Bronze (B) = 0.5


[RULE]
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE untuk kasus ini
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi string untuk pemecahan masalah.
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()

[EXAMPLE]
poinCalculator("GSB")
output: jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
*/

/*
your Pseudocode/ Algoritma here
SET gold WITH VALUE 0
SET silver WITH VALUE 0
SET bronze WITH VALUE 0

FOR i TO array.length
    IF array[i] DOUBLE EQUAL WITH 'G' THEN
        gold INCREMENT
    ELSE IF array[i] DOUBLE EQUAL WITH 'S' THEN
        silver INCREMENT
    ELSE IF array[i] DOUBLE EQUAL WITH 'B' THEN
        bronze INCREMENT
    END IF
END FOR

SET total WITH CALCULATE OF (gold x 2) + (silver x 1) + (bronze x 0.5)
DISPLAY  `Jumlah gold : VARIABLE gold, Jumlah silver: VARIABLE silver, jumlah Bronze : VARIABLE bronze. Dan totalnya adalah : VARIABLE total `

*/

function poinCalculator(array) {
    
    var gold = 0;
    var silver = 0;
    var bronze = 0;

    for(i = 0; i < array.length; i++){
        if(array[i] === 'G'){
            gold++
        }else if(array[i] === 'S'){
            silver++
        }else if(array[i] === 'B'){
            bronze++
        }
    }

    var total = (gold * 2) + (silver * 1) + (bronze * 0.5);
    
    return `Jumlah Gold: ${gold}, jumlah Silver: ${silver}, jumlah Bronze: ${bronze}. Dan totalnya adalah : ${total}`

}

console.log(poinCalculator("GSB"));
// jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
console.log(poinCalculator("GGG"));
// jumlah Gold: 3, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 6
console.log(poinCalculator("SSB"));
// jumlah Gold: 0, jumlah Silver: 2, jumlah Bronze: 1. Dan totalnya adalah: 2.5
console.log(poinCalculator("BBGSSGB"));
// jumlah Gold: 2, jumlah Silver: 2, jumlah Bronze: 3. Dan totalnya adalah: 7.5
console.log(poinCalculator(""));
// jumlah Gold: 0, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 0
