function kaliTerusRekursif(angka) {
    
    var arrAngka = String(angka).split('')  //split input ke array untuk periksa jumlah digitnya
    
    if (arrAngka.length > 1){ //apabila length array (= jumlah digit) masih diatas 1
        var num = 1 //menampung hasil kali

        for (let index = 0; index < arrAngka.length; index++) {
            
            num *= arrAngka[index] //kali satu per satu data array
            
        }

        return kaliTerusRekursif(num) //rekursif fungsi dengan isi hasil kalinya
    }
    else{
        return arrAngka[0] //kalau panjang array sudah 1, return nilai datanya
    }


  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6
  

  //Arjuna Sarumpaet