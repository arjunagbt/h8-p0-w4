function cariModus(arr) {

    var arrCounter = []  //tempat menampung counter masing2 angka muncul berapa kali
  
  
    for (let i = 0; i < arr.length; i++) {   //loop dengan batas length array input
  
        //index yang diisi di arrayCounter menyesuaikan dengan isi data dari array input.
        //jadi apabila data dari arr[0] isinya 10, akan ditambahkan nilai 1 ke arrCounter[10]. lainnya dibiarkan undefined
        //nilai di index tersebut akan bertambah 1 setiap ditemukan nilai yang sama di dalam array

      if (arrCounter[arr[i]] != undefined) {        
        arrCounter[arr[i]]++        
      } else {
        arrCounter[arr[i]] = 1
      }
  
    }
  
  
    var arrCounterReduced = arrCounter.filter(function (num) { return num != undefined }) //memfilter arrCounter agar tidak ada lagi data yang undefined
    var jumlahTerbesar = 0 //variabel penampung data counter
    var hasil = 0 //variabel penampung index arrCounter (yang adalah data dari arr input)
  
    if (arrCounterReduced.length != 1) {  //blok kode ini akan dijalankan apabila arrCounterReduced lengthnya lebih dari 1 (yang artinya array input tidak hanya berisi 1 angka yang sama berulang2 saja)
      if (arrCounterReduced.every(function (num) { return num == arrCounterReduced[0] })) { 
        return -1 //return -1 apabila isi dari arrayCounterReduced nilainya sama semua (artinya semua angka di array input muncul dengan jumlah yang sama)
      } else { 
        for (let j = 0; j < arrCounter.length; j++) {
  
          if (arrCounter[j] > jumlahTerbesar) { //periksa 1 1 berapa kali masing 2 angka array input (yang adalah index dari arrayCounter) muncul
            jumlahTerbesar = arrCounter[j]   
            hasil = j //hasil adalah index dari arrayCounter (belum di reduksi)
  
          }
  
        }
        return hasil
      }
    }
  
    else {
      return -1  //bila seluruh input angkanya sama semua
    }
  
  
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1

  //Arjuna Sarumpaet