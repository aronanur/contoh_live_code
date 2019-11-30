// Competencies: Mathematical Operation and Conditionals
/*
===============
Casino Scanner
===============
Instruksi
=========
Seseorang pengunjung bar direpresentasikan oleh JavaScript dengan memiliki variable name, age, money, dan win.
Ia masuk ke casino untuk judi, namun casino memiliki kondisi sebagai berikut:
Step 1. Jika name dari si pengunjung kosong, tampilkan di console "Kenalan dulu kali sebelum masuk!" dan program terhenti, jika tidak, lanjut ke step 2.
Step 2. Jika age dari si pengunjung dibawah 17 tahun, maka ia dilarang untuk masuk ke dalam casino, tampilkan di console "jangan berjudi, anak muda!"
Step 3. Jika umur diatas 17 tahun, maka orang akan masuk ke dalam kasino, namun dia juga harus memiliki uang diatas 50000 untuk entry masuk ke dalam kasino
  - Jika money / uang yang ia miliki tidak mencukupi, maka tampilkan di console "Uang tidak cukup. Anda harus pulang.".
  - Jika uang cukup, tampilkan "Anda bisa masuk kasino. Uang anda saat ini [...]", dan ganti [...] dengan sisa uang yang telah dikurangi oleh harga masuk.
=========
Diberikan variable name, age, dan money. Dipersilahkan mengganti nilai dari 3 variable tersebut, sesuai data type yang cocok, namun dilarang mengganti nama variable.
*/

// SKELETON CODE (Code Sample)

var name = 'Arona Nur Tetulis'
var age  = 23
var money = 49000
var win = ''

if(name !== ''){

    if(age < 17){
        console.log('Jangen berjudi anak muda!')
    }else if(age >= 17){

        if(money >= 50000){
            console.log(`Anda masuk kasino. Uang anda saat ini ${money-50000} karena harga masuknya adalah 50000`)
        }else{
            console.log('uang tidak cukup, kamu harus pulang!')
        }

    }

}else{
    console.log('Kenalan dulu kali sebelum masuk!')
}