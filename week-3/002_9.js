/*
==================================
Nilai Kuliah
==================================
[INSTRUKSI]
Baca soal dengan teliti sebelum mengerjakan!
Professor X ingin membuat suatu function computeGrade untuk menghitung nilai huruf dari mahasiswa nya untuk mata kuliah yang dia ajarkan. 
Bantulah Prof. X untuk mengimplementasikan function tersebut!
Function computeGrade() menerima suatu input berupa perolehan nilai akhir dari seorang mahasiswa di kelas Prof. X. Fungsi ini akan
mengeluarkan output berupa String nilai huruf dari nilai mahasiswa tersebut. 
Nilai huruf tersebut dihitung berdasarkan range dari nilai mahasiswa tersebut, dengan aturan sebagai berikut:
1. Nilai 'A' : 85-100
2. Nilai 'A-': 80-84
2. Nilai 'B+': 75-79
3. Nilai 'B' : 70-74
4. Nilai 'B-': 65-69
5. Nilai 'C+': 60-64
6. Nilai 'C' : 55-59
7. Nilai 'Tidak Lulus': <55
[CONTOH]
- computeGrade(56) akan mengoutput 'C'.
- computeGrade(49) akan mengoutput 'Tidak Lulus'.
- computeGrade(74) akan mengoutput 'B'.
- computeGrade(80) akan mengoutput 'A-'.
- computeGrade(79) akan mengoutput 'B+'.
*/

function computeGrade(nilai) {
    switch (true) {
        case nilai >= 85 && nilai <= 100:
            return 'A'
            break;
        case nilai >= 80 && nilai <= 84:
            return 'A-'
            break;
        case nilai >= 75 && nilai <= 79:
            return 'B+'
            break;
        case nilai >= 70 && nilai <= 74:
            return 'B'
            break;
        case nilai >= 65 && nilai <= 69:
            return 'B-'
            break;
        case nilai >= 60 && nilai <= 64:
            return 'C+'
            break;
        case nilai >= 55 && nilai <= 59:
            return 'C'
            break;
        case nilai < 55 :
            return 'Kamu tidak lulus'
            break;
        default:
            break;
    }

}

console.log(computeGrade(56)) 
console.log(computeGrade(49)) 
console.log(computeGrade(74)) 
console.log(computeGrade(80))
console.log(computeGrade(79)) 