function shoppingTime(memberId, money) {
    
    if (!memberId){   //bila member ID kosong
        return `Mohon maaf, toko X hanya berlaku untuk member saja`
    }
 
    if (money < 50000){  //bila uang kurang dari 50k
        return `Mohon maaf, uang tidak cukup`
    }

    var saleObj = {                         //object berisi data barang yang dijual
        'Sepatu Stacattu' : 1500000,
        'Baju Zoro' : 500000,
        'Baju H&N' : 250000,
        'Sweater Uniklooh' : 175000,
        'Casing Handphone' : 50000
    }

    var invoiceObj = {      //template invoice yang dibeli
        memberId : memberId,
        money : money,
        listPurchased : [],
        changeMoney : 0
    }

    var arrPurchasable = []  //array menampung harga masing2 barang

    for (const key in saleObj) {
       
        arrPurchasable.push(saleObj[key])  //isi array purchasable

    }
    var moneyLeft = money  //menghitung sisa uang

    for (let i = 0; i < arrPurchasable.length; i++) {  //periksa harga barang satu per satu
       
        if (moneyLeft >= arrPurchasable[i]) {  //bila uang cukup
            moneyLeft -= arrPurchasable[i]  //kurangi uang (tandanya sudah membeli)
            switch (i) {        //bila dilakukan pembelian, periksa indeks yang dibeli
                case 0:
                    invoiceObj.listPurchased.push('Sepatu Stacattu')
                    break;
            
                case 1:
                invoiceObj.listPurchased.push('Baju Zoro')
                    break;

                case 2:
                invoiceObj.listPurchased.push('Baju H&N')
                    break;

                case 3:
                invoiceObj.listPurchased.push('Sweater Uniklooh')
                    break;

                case 4:
                invoiceObj.listPurchased.push('Casing Handphone')
                    break;

            } 

            
        }
       
        invoiceObj.changeMoney = moneyLeft
    }
    
    return invoiceObj
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja


  //Arjuna Sarumpaet