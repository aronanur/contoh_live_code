/*
================
Treasure Hunter
================
[INSTRUCTIONS]
treasureHunt adalah sebuah function yang menerima satu parameter berupa string.
function akan mereturn berapa banyak jumlah harta karun (simbol) yang ada di dalam string tersebut.
harta karun atau simbol yang dicari adalah:
'!', '@', '#', '$', '%', '^', '&', '*', '(', ')'
Jika tidak ada simbol pada string tersebut, maka function akan mereturn 'harta karun tidak ditemukan'
[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi string & array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!
[EXAMPLE]
treasureHunt("alskdj*lakjsd761^%")
output: 3
*/

function treasureHunt(string) {
    var symbol = '!@#$%^&*()'
    var countSymbol = 0
    var result = ''

    for(i = 0; i < string.length;i++){
        for(j = 0; j < symbol.length; j++){
            if(string[i] === symbol[j]){
                countSymbol += 1
            }
        }
    }

    result = countSymbol > 0 ? countSymbol : 'Harta karun tidak ditemukan'
    return result
}

console.log(treasureHunt("alskdj*lakjsd761^%")); // 3
console.log(treasureHunt("4pa!n!")); // 2
console.log(treasureHunt("bin*ngbin*ang@!*&^")); // 7
console.log(treasureHunt("sAndIkhUsus")); // 0
console.log(treasureHunt("ki(*^hasd*&^%ja(*")); // 9