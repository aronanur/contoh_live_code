/**
 * 
 * INI YANG TERBARU COBA PELAJARIN INI
 * 
 * 
 * 
 * =================
 * Belanja di warung
 * =================
 * 
 * [Description]
 * Ibu meminta tolong kamu untuk belanja di warung.
 * Ibu akan memberikan sejumlah uang dan satu jenis barang yang harus dibeli.
 * Warung tersebut hanya menjual:
 * 1. Wafer seharga 15000
 * 2. Bayam seharga 5000
 * 3. Indomie seharga 2000
 * 
 * [Instruction]
 * Hitunglah berapa barang yang dapat dibeli dengan jumlah uang yang telah
 * diberikan dan sisa kembalian uang jika ada.
 * 
 * [Example]
 * var @belanja = 'wafer'
 * var @uang = 40000
 * 
 * OUTPUT
 * 'Kamu membeli 2 wafer dan memiliki kembalian sebanyak 10000'
 * 
 * Karena ibu memberikan uang 40000 dan ingin membeli wafer. Maka kamu akan mendapatkan 2 wafer
 * (2 x 15000) serta memiliki kembalian 10000.
 * 
 * [Asumsi]
 * - Uang akan selalu lebih besar atau sama dengan dari harga barang yang akan dibeli.
 * - Barang yang dibeli hanya wafer, bayam, atau indomie
 */

 var barang = 'Wafer'
 var uang   = 40000
 var hitung = ''
 var sisa   = ''

 if(barang === 'Wafer'){
    hitung = Math.floor(uang / 15000)
    sisa   = uang % 15000
    console.log(`Kamu membeli ${hitung} ${barang} dan memiliki kembalian ${sisa}`)
 }else if(barang === 'Bayam'){
    hitung = Math.floor(uang / 5000)
    sisa   = uang % 5000
    console.log(`Kamu membeli ${hitung} ${barang} dan memiliki kembalian ${sisa}`)
 }else if(barang === 'Indomie'){
    hitung = Math.floor(uang / 2000)
    sisa   = uang % 2000
    console.log(`Kamu membeli ${hitung} ${barang} dan memiliki kembalian ${sisa}`)
 }