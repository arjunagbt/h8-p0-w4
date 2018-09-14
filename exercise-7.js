function digitPerkalianMinimum(angka) {

    var arrayMod = []     //array menampung faktor-faktor dari input
    var arrayFaktor = []  //array menampung pengelompokan faktor-faktor dari input
  
    for (let i = 0; i <= angka; i++) {
  
      if (angka % i === 0) {
        arrayMod.push(i)   //isi arrayMod dengan faktor dari input
      }
  
    }
  
    //console.log(arrayMod)
    if (arrayMod.length === 1 && arrayMod[0] === 1) {  //bila isi array input [1] (length = 1)
      arrayFaktor = [[1, 1]]   //array faktor langsung mengembalikan [[1,1]] (1 * 1)
    } else {
      var isUndefined = false
      while (!isUndefined) {        //selama arrayMod masih ada isinya
        if (arrayMod[0] !== undefined) {
          arrayFaktor.push([arrayMod.shift(), arrayMod.pop()])  //isi arrayFaktor dengan data terdepan dan terbelakang dari arrayMod (mengelompokkan faktor-faktor)
        }
        else {
          isUndefined = true
        }
  
      }
    }
    //console.log(arrayFaktor)
    var counterHasil = []   //array menampung berapa digit masing-masing nested array perkalian faktpr
  
    for (let j = 0; j < arrayFaktor.length; j++) {  
  
      var counterDigit = 0 
  
      for (let k = 0; k < arrayFaktor[j].length; k++) {
  
        counterDigit += String(arrayFaktor[j][k]).length //hitung digit
  
      }
  
      counterHasil.push(Number(counterDigit)) //tampung ke array
    }
    //console.log(counterHasil)
  
    return Math.min(...counterHasil)  //kembalikan nilai angka terkecil dari array hasil.
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
  
  
  //Arjuna Sarumpaet