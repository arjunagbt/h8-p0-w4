function urutkanAbjad(str) {
    
    return str.split('').sort().join('')   //built in function chain. input di split karakter-perkarakter, sort, lalu digabungkan lagi

  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'

  //Arjuna Sarumpaet