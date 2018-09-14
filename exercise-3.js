function cariMedian(arr) {
    // you can only write your code here!

    if((arr.length) % 2 !== 0){     
        return arr[Math.floor(arr.length/2)]    //fungsi menghitung isi indeks tengah dari array apabila length array inputnya ganjil
    } else{
        return (arr[((arr.length/2)-1)]+arr[(arr.length/2)])/2  //bila input array lengthnya genap, return hasil dari dua data indeks tengah dijumlahkan dibagi 2
    }

  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5

  //Arjuna Sarumpaet