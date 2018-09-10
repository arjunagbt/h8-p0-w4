function angkaPrima(angka) {
    // you can only write your code here!

    var counter = 2 //counter dimulai dari 2 (karena bilangan prima > 1, berarti faktor pertama yang harus di cek 2)
   
   

    while(counter < Math.sqrt(angka)){ //limit diset lebih kecil dari akar kuadrat dari input
        
       if (angka % counter === 0){  //apabila angka habis di bagi satu saja bilangan antara counter pertama s/d akar dari input
           return false     //fungsi langsung return false
       }


        
        counter ++
    }
    return angka !== 1  //fungsi default me return true apabila angka tidak sama dengan 1 (bukan prima) dan fungsi tidak mereturn false
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false


  //arjuna sarumpaet
  // https://en.wikipedia.org/wiki/Prime_number#Trial_division