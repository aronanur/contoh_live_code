/*
========================
Number Increase Interval
========================
[INSTRUCTION]
buatlah sebuah function yang menerima 2 parameter (start, finish) dengan tipe data number.
function tersebut akan mencetak angka-angka yang selalu bertambah secara interval, dari start hingga finish.
Adapun prosesnya:
- start, yaitu awalan angka 
- finish, yaitu akhiran angka
jika angkanya sudah MELEBIHI finish, maka angka tidak di cetak.
[EXAMPLE]
input: start = 6 & finish = 20
proses:
6
7 (interval +1 dari angka sebelumnya)
9 (interval +2 dari angka sebelumnya) 
12 (interval +3 dari angka sebelumnya)
16 (interval +4 dari angka sebelumnya)
21 (interval +5 dari angka sebelumnya, karena 21 > 20 (finish) 21 tidak di print)
output:
6
7
9
12
16
*/

// your code here 

function angka(start, finish) {
    var angka = ''
    var count = 0
    for(i = start; i < finish; i += count){
        angka += `${i}\n`
        count += 1
    }
    return angka
}

console.log(angka(6, 20));