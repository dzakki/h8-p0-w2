// var tanggal; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
// var bulan; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
// var tahun; //  assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var tanggal,
    bulan,
    tahun;
tanggal = 1;
bulan = 1;
tahun = 2001;

switch (bulan) {
    case 1:
        bulan = 'Januari'
        break;
    case 2:
        bulan = 'Februari'
        break;
    case 3:
        bulan = 'Maret'
        break;    
    case 4:
        bulan = 'April'
        break;
    case 5:
        bulan = 'Mei'
        break;
    case 6:
        bulan = 'Juni'    
        break;
    case 7:
        bulan = 'Juli'
        break;
    case 8:
        bulan = 'Agustus'
        break;
    case 9:
        bulan = 'September'
        break;
    case 10:
        bulan = 'Oktober'
        break;
    case 11:
        bulan = 'November'
        break;    
    case 12:
        bulan = 'Desember'
        break;   
    default:
        bulan = 'format bulan maksimal 12'
        break 
}
if (tanggal > 31) {
    tanggal = 'format tanggal maksimal 31!!'
}
if (tahun > 2200 || tahun < 1900 ) {
    tahun = 'format tahun minimal 1900 dan maksimal 1900!!'  
} 
console.log(`${tanggal} ${bulan} ${tahun}`)