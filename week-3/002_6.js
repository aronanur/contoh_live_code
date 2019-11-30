/*
Competencies: Function and Conditionals
Instruksi
-------------------------------
Dalam suaru antrian terdapat 3 loket pelayanan
Loket A akan melayani pelanggan dengan nomor urut 1, 4, 7, 10
Loket B akan melayani pelanggan dengan nomor urut 2, 5, 8, 11
Loket C akan melayani pelanggan dengan nomor urut 3, 6, 9, 12
Dan pada antrian ini hanya ada 12 antrian.
Jika nomor antrian lebih besar dari 12 atau lebih kecil dari 1, maka tampilkan "Nomor antrian invalid"
Buatlah function loketPelayan yang menerima input berupa nomor antrian dan
mengembalikan Loket yang akan memberikan pelayanan.
Note:
- function locketPelayanan hanya menerima 1 parameter berupa angka
- gunakan conditional, dapat berupa if-else atau switch-case statement
*/

function locketPelayanan(angka) {
    var message = ''
    var loket   = ''

    if(angka >= 1 && angka <= 12){
        if(angka === 1 || angka === 4 || angka === 7 || angka === 10){
            loket    = 'A'
         }else if(angka === 2 || angka === 5 || angka === 8 || angka === 11){
             loket = 'B'
         }else if(angka === 3 || angka === 6 || angka === 9 || angka === 12){
             loket = 'C'
         }
         message = `Kamu akan dilayani oleh loket ${loket}`
    }else{
        message = 'Nomor Antrian Invalid'
    }

    return message

}

console.log(locketPelayanan(0))