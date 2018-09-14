function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
  
    var stockAwal = [listBarang[0][2], listBarang[1][2], listBarang[2][2]]  //array berisi stock awal untuk perbandingan 
    
    if(shoppers.length == 0){  //kalau input kosong
        return []
    }

    var result = [{  //template result
        product: 'Sepatu Stacattu',
        shoppers: [],
        leftOver: 0,
        totalProfit: 0,
    },
    {
        product: 'Baju Zoro',
        shoppers: [],
        leftOver: 0,
        totalProfit: 0,
    },
    {
        product: 'Sweater Uniklooh',
        shoppers: [],
        leftOver: 0,
        totalProfit: 0,
    }

]

for (let i = 0; i < shoppers.length; i++) {  //periksa data aray shopper 1 per 1

    switch (shoppers[i].product) {  //periksa key dari object shopper 1 per 1; masukkan ke result key yang sesuai
        case 'Sepatu Stacattu':
            if(listBarang[0][2] >= shoppers[i].amount){
                listBarang[0][2] -= shoppers[i].amount
                result[0].shoppers.push(shoppers[i].name)
            }

            break;
    
        case 'Baju Zoro':
            if(listBarang[1][2] >= shoppers[i].amount){
                listBarang[1][2] -= shoppers[i].amount
                result[1].shoppers.push(shoppers[i].name)
            }
            break;

        case 'Sweater Uniklooh':
            if(listBarang[2][2] >= shoppers[i].amount){
                listBarang[2][2] -= shoppers[i].amount
                result[2].shoppers.push(shoppers[i].name)
            }
            break;
        default:
            break;
    }   
    
}

   for (let i = 0; i < result.length; i++) {
    
       result[i].leftOver = listBarang[i][2]
       result[i].totalProfit = (stockAwal[i] - result[i].leftOver) * listBarang[i][1]
       
   }



return result

  }
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]


  //Arjuna Sarumpaet