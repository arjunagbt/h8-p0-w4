function totalDigitRekursif(angka) {
    
    arrAngka = String(angka).split('')   //split input ke array dengan menjadikannya string

    if(arrAngka.length){  //selama array belum kosong
        return Number(arrAngka[0]) + Number(totalDigitRekursif(arrAngka.slice(1).join('')))  //return angka pertama dari array + fungsi dijalankan lagi tapi slice index pertama
    }
    else{
        return 0  //ketika array sudah kosong return semuanya
    }

  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5


  //Arjuna Sarumpaet