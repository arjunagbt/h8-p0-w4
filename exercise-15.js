function changeVocals (str) {

    strSwap = ''
    for (let i = 0; i < str.length; i++) {
        
        switch (str[i]) {
            case 'a':
                strSwap += 'b'
                break;
            case 'i':
                strSwap += 'j'
                break;
            case 'u':
                strSwap += 'v'
                break;
            case 'e':
                strSwap += 'f'
                break;
            case 'o':
                strSwap += 'p'
                break;
            case 'A':
                strSwap += 'B'
                break;
            case 'I':
                strSwap += 'J'
                break;
            case 'U':
                strSwap += 'V'
                break;
            case 'E':
                strSwap += 'F'
                break;
            case 'O':
                strSwap += 'P'
                break;
        
            default:
                strSwap += str[i]
                break;
        }

        
    }
    return strSwap
  }
  
  function reverseWord (str) {
    //code di sini
    return str.split('').reverse().join('')
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var strNew = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toLowerCase()) {
            strNew += str[i].toUpperCase()
        }else{
            strNew += str[i].toLowerCase()
        }

        
    }
    return strNew
  }
  
  function removeSpaces (str) {
    //code di sini

    var strArr = str.split('')
    
    
    for (let i = 0; i < strArr.length; i++) {
        var position = 0
        if (strArr[i] == ' ') {
            position = i
            strArr.splice(position, 1)
        }
        
    }
    return strArr.join('')
  }
  
  function passwordGenerator (name) {
    if(name.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }else
    {return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))}
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

  //Arjuna Sarumpaet