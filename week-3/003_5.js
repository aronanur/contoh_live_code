/**
 * 
 * INI YANG TERBARU COBA PELAJARIN INI
 * 
 * ============
 * NILAI KULIAH
 * ============
 * 
 * Buatlah sebuah fungsi nilaiKuliah yang menerima 4 buah parameter : nama, matkul1, matkul2, matkul3
 * - nama adalah string yang berisi nama mahasiswa
 * - matkul1, matkul2, matkul3 adalah angka yang berisi nilai-nilai mahasiswa tersebut
 * 
 * Fungsi akan menghitung rata-rata nilai mahasiswa tersebut dari 3 nilai mata kuliah yang diberikan
 * Dari nilai rata-rata yang didapat, mahasiswa akan diberikan grade sebagai berikut :
 * - nilai lebih besar atau sama dengan 80 akan mendapat grade A
 * - nilai lebih besar atau sama dengan 70 DAN lebih kecil dari 80 akan mendapat grade B
 * - nilai lebih kecil dari 70 akan mendapat grade C
 * 
 * Kemudian, buatlah sebuah kalimat sebagai output dengan menyertakan nama mahasiswa dalam kalimat tersebut.
 * Perhatikan dan analisa driver code untuk bisa membuat kalimat yang dimaksud
 * 
 * Rules :
 * - Fungsi TIDAK menampilkan apapun dalam prosesnya
 * - Kalimat yang dihasilkan HARUS di return oleh fungsi
 */

 function nilaiKuliah(nama, matkul1, matkul2, matkul3) {
     var average = (matkul1 + matkul2 + matkul3) / 3
     var grade   = ''
     var message = ''

     if(average >= 80){
        grade = 'A'
        message = `Selamat ${nama} kamu mendapatkan grade ${grade} dengan rata-rata ${Math.round(average)} , Pertahankan!`
     }else if(average >= 70 && average < 80){
         grade = 'B'
         message = `${nama} kamu mendapatkan grade ${grade} dengan rata-rata ${Math.round(average)} , Tingkatkan!`
     }else if(average < 70){
         grade = 'C'
         message = `${nama} kamu mendapatkan grade ${grade} dengan rata-rata ${Math.round(average)} , Belajar lebih giat!`
     }

     return message

 }

 console.log(nilaiKuliah('Arona Nur Tetulis', 80, 90, 85))
 console.log(nilaiKuliah('Bagong', 70, 80, 75))
 console.log(nilaiKuliah('Bagong JR', 60, 60, 65))

