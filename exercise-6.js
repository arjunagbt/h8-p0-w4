function hitungHuruf(kata) {

  kata = kata.toLowerCase()  
  
  arrKata = kata.split(" ")  //split kata ke masing2 array tersendiri
  

  var result = []     //menampung kata yang memiliki jumlah perulangan huruf terbanyak
  var counterHasil = 0  //counter huruf paling banyak

  for (var j = 0; j < arrKata.length; j++) {  //periksa 1 per 1 isi dari arrKata
    var periksaKata = arrKata[j] 
    var counterHurufTerbanyak = 0  //counter huruf terbanyak di kata yang sudah selesai diperiksa

    for (var k = 0; k < periksaKata.length; k++) {  //periksa huruf saat ini

      var counterHuruf = 0 //counter yang akan memeriksa huruf terbanyak di kata saat ini
      var periksaHuruf = periksaKata[k]

      for (var n = k + 1; n < periksaKata.length; n++) {  //periksa apakah huruf berikutnya berulang
        var hurufBerikutnya = periksaKata[n]
        if (periksaHuruf === hurufBerikutnya ) {
          counterHuruf++
        }

      }

      if (counterHuruf > counterHurufTerbanyak) {  //apabila counterHuruf yang sedang diperiksa lebih besar dari kata yang telah disimpan
        counterHurufTerbanyak = counterHuruf  //override
      }

    }
    if (counterHurufTerbanyak > counterHasil) {  //bila counter huruf yang sedang diperiksa lebih besar dari counter kata yang di simpan di hasil
      result = []  //kosongkan array hasil untuk menampung kata ini
    } 
    if (counterHurufTerbanyak >= counterHasil){  //bila counter huruf lebih besar sama dengan dari counter kata yang disimpan dihasil
      counterHasil = counterHurufTerbanyak  //counter hasilnya di override
      result.push(arrKata[j]) //push ke array result
    }
  }
  return result[0]  //return data pertama dari array hasil (kata perulangan yang paling pertama ditemukan)
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau

  //Arjuna Sarumpaet