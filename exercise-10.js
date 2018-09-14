function checkAB(num) {
    
     var numArr = num.split('')  //split ke array
     var arrHasil = [] //array hasil menyimpan potongan string dari karakter a/b ke karakter a/b pertama dari belakang
    for (let i = 0; i < numArr.length; i++) {  //periksa karakter per karakter dari depan
        
        if(numArr[i] == 'a'){  //saat ketemu karakter a
            
            arrHasil = numArr.slice(i, numArr.lastIndexOf('b')+1) //tampung ke array hasil slice dengan batas akhir huruf b
            break
        } else if(numArr[i] == 'b'){ //saat ketemu karakter b

            arrHasil = numArr.slice(i, numArr.lastIndexOf('a')+1) //tampung ke array hasil slice dengan batas akhir huruf a
            break
        }
         
        
    }
    if(arrHasil === [] || arrHasil.length  < 3){ //bila array hasil kosong, atau lengthnya lebih kecil dari 3 (jarak a ke b atau b ke a lebih kecil dari 3)
        return false 
    } else{  //bila array length lebih panjang dari 3
        return true
    }

  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false

  //Arjuna Sarumpaet