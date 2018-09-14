function changeMe(arr) {
    
   

   for (let i = 0; i < arr.length; i++) {  //periksa input
    var Obj = {      //object dikosongkan tiap loop
        firstName: '',
        lastName: '',
        gender: '',
        age: 0,
    }
    for (let j = 0; j < arr[i].length; j++) { //masukkan data input ke key object yang sesuai
       
        switch (j) {
            case 0:
                Obj.firstName = arr[i][j]
                break;
        
            case 1:
                Obj.lastName = arr[i][j]
                break;
            case 2:
                Obj.gender = arr[i][j]
                break;
            case 3:
                Obj.age = 2018 - arr[i][j]
                break;
            
        }
        

    }  
    if (Obj.age < 1) {  //bila age tidak diberi input (default 0) atau nilainya negatif (karena birthyear lebih besar dari tahun sekarang)

        Obj.age = 'Invalid Birth Year'  
    }

    console.log(`${i+1}. ${Obj.firstName} ${Obj.lastName}`);
        
    console.log(Obj);
       
   }

  
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""


  //Arjuna Sarumpaet