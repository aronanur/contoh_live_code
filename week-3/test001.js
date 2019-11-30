var item = -1

if (item >= 0 && item < 5) {
    console.log('Terimakasih telah membeli item di toko rubah orange')
} else if(item >= 5 && item < 7) {
    console.log('Kamu mendapatkan 1 item lagi karena sudah membeli minimal 5 item')
}else if (item >= 7 && item < 9) {
    console.log('Kamu mendapatkan 3 item lagi karena sudah membeli minimal 7 item')
}else if(item >= 9){
    console.log('Kamu mendapatkan 5 item lagi karena sudah membeli minimal 9 item')
}else{
    console.log('Input Invalid')
}