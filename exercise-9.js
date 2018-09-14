function tukarBesarKecil(kalimat) {
    
    var string = '' //string menampung hasil

    for (let i = 0; i < kalimat.length; i++) {  //periksa kalimat input karakter-perkarakter
        
        if(kalimat[i] === kalimat[i].toLowerCase()){  //bila karakter yang sedang diperiksa lowercase
        string += kalimat[i].toUpperCase()   //tukar ke uppercase
        } else {
            string += kalimat[i].toLowerCase() //bila uppercase, tukar ke lowercase
        }

        
    }
    return string
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"


  //Arjuna Sarumpaet