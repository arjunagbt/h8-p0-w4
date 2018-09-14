function ubahHuruf(kata) {

    var hasil = ''                                  //string kosong menampung hasil
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'  //string alfabet untuk membandingkan
    
    var index = 0
    


    while(index < kata.length){  //periksa string input index-per-index
       
        var same = false        //inisialisasi boolean false sebagai limit loop pembanding alfabet
        var counterAlphabet = 0 //reset counter alfabet ke 0 lagi tiap loop pemeriksa input selesai
       
        while(!same){ //loop pembanding alfabet
            if(kata[index] == alphabet[counterAlphabet]){ //apabila ditemukan kesamaan
                same = true                                 //keluar dari loop
                hasil += alphabet[counterAlphabet+1]        //tampung hasil alfabet sebelahnya ke string hasil
            }
            else{ //selama masih false, selector alfabet bergeser 1 kekanan
            counterAlphabet++
            }
        }
       
        index++
        
    }


    return hasil
   
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu


  //Arjuna Sarumpaet