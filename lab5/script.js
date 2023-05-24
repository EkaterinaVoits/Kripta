function encrypt_routeInSpiral() {

    start = new Date().getTime();

    let rows = Number(document.getElementById('key').value);
    let message = document.getElementById('message').value;
    message = message.replace(/\s/g, '');

    var columns = Math.ceil(message.length / rows);

    if(rows * columns>message.length) {
        for(j=message.length+1; j<=rows * columns; j++) {
            message+="_";
        }
    } 

    console.log(message)

    let arr = new Array(rows).fill().map(() => new Array(columns).fill(0));
    let row = 0;
    let col = 0;
    let direction = 'down';
    for (let i = 0; i < rows * columns; i++) {

        arr[row][col] = message[i] ;
        
        
        if (direction === 'right') {
          if (col === columns - 1 || arr[row][col + 1] !== 0) {
            direction = 'up';
            row--;
        } else {
            col++;
        }
        } else if (direction === 'down') {
            if (row === rows - 1 || arr[row + 1][col] !== 0) {
                direction = 'right';
                col++;
            } else {
                row++;
            }
        } else if (direction === 'left') {
            if (col === 0 || arr[row][col - 1] !== 0) {
                direction = 'down';
                row++;
            } else {
                col--;
            }
        } else if (direction === 'up') {
            if (row === 0 || arr[row - 1][col] !== 0) {
                direction = 'left';
                col--;
            } else {
                row--;
            }
        }
    }

    console.log(arr);

    var result = "";
    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < columns; j++) {
          result += arr[i][j];
      }
    }

    stop = new Date().getTime();

    alert(stop - start);
    document.getElementById('message').innerHTML = result;
}


function decrypt_routeInSpiral() {

    start = new Date().getTime();

    let rows = Number(document.getElementById('key').value);
    let message = document.getElementById('message').value;
    
    var columns = Math.ceil(message.length / rows);

    console.log("fffffffff")

    var encryptedMessage = new Array(rows);
    for (var i = 0; i < rows; i++) {
      encryptedMessage[i] = new Array(columns);
    }

    var index = 0;
    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < columns; j++) {
        if (index < message.length) {
          encryptedMessage[i][j] = message.charAt(index);
          index++;
        } 
      }
    }

    console.log(encryptedMessage);
   
    var resultDecription="";
    let row = 0;
    let col = 0;
    let direction = 'down';
    for (let i = 0; i < rows * columns; i++) {


        if (direction === 'right') {
            if (col === columns - 1 ) {
                resultDecription+=encryptedMessage[row][col]
                direction = 'up';
                //encryptedMessage[row][col]=0;
                row--;                
            } else {
                resultDecription+=encryptedMessage[row][col]
               // encryptedMessage[row][col]=0;
                col++;   
            }

            

        } else if (direction === 'down') {
            if (row === rows - 1 ) {
                direction = 'right';
                resultDecription+=encryptedMessage[row][col]
                //encryptedMessage[row][col]=0;
                col++;
            } else {
                resultDecription+=encryptedMessage[row][col]
               // encryptedMessage[row][col]=0;
                row++;
            }

          //  encryptedMessage[row][col]=0;

        } else if (direction === 'left') {
            if (col === 0) {
                direction = 'down';
                resultDecription+=encryptedMessage[row][col]
                //encryptedMessage[row][col]=0;
                row++;      
            } else {
                resultDecription+=encryptedMessage[row][col]
                //encryptedMessage[row][col]=0;
                col--;
            }

          //  encryptedMessage[row][col]=0;

        } else if (direction === 'up') {
            if (row === 0) {
                direction = 'left';
                 resultDecription+=encryptedMessage[row][col]
                 //encryptedMessage[row][col]=0;
                col--;
            } else {
                resultDecription+=encryptedMessage[row][col]
               // encryptedMessage[row][col]=0;
                row--;
            }

          //  encryptedMessage[row][col]=0;

        }

        
    }
    console.log(resultDecription);

    stop = new Date().getTime();

    alert(stop - start);
    document.getElementById('message').innerHTML = resultDecription;
}




function process(action) {
    start = new Date().getTime();
    let firstKey = document.getElementById('firstKey').value.toUpperCase();
    let secondKey = document.getElementById('secondKey').value.toUpperCase();

    let inputMessage = '';
    inputMessage = document.getElementById('inputMessage').value;
    inputMessage = inputMessage.replace(/\s/g, '').toUpperCase();

    for (let i = inputMessage.length; i < firstKey.length * secondKey.length; i++) {
        inputMessage += '_';
    };

    let array_firstKey = firstKey.split('');
    let array_secondKey = secondKey.split('');

    let sorted_firstKey = alphabetize(firstKey);
    let array_sorted_firstKey = sorted_firstKey.split('');

    console.log(sorted_firstKey);
    let sorted_secondKey = alphabetize(secondKey);
    let array_sorted_secondKey = sorted_secondKey.split('');

    function alphabetize(str) {
        return str.split('').sort().join('');
    }

    let numbers_firstKey = [];
    for (const letter of array_firstKey) {
        const indexLetter = array_sorted_firstKey.indexOf(letter);
        array_sorted_firstKey[indexLetter] = '_';
        if (numbers_firstKey.indexOf(indexLetter + 1) != -1) {
            numbers_firstKey.push(indexLetter + 2);
        }
        else
            numbers_firstKey.push(indexLetter + 1);
    }

    let numbers_secondKey = [];
    for (const letter of array_secondKey) {
        const indexLetter = array_sorted_secondKey.indexOf(letter);
        array_sorted_secondKey[indexLetter] = '_';
        if (numbers_secondKey.indexOf(indexLetter + 1) != -1) {
            numbers_secondKey.push(indexLetter + 2);
        }
        else
            numbers_secondKey.push(indexLetter + 1);
    }
    let cryptResult = '';
    if (action == 'encrypt') {
        cryptResult = encrypt(inputMessage, numbers_firstKey, numbers_secondKey); // шифруем 
    }
    else cryptResult = decrypt(inputMessage, numbers_firstKey, numbers_secondKey); // дешифруем

    // формируем строку с результатом
    let regExp = new RegExp('.{' + firstKey.length + '}', 'g');
    let resultLine = cryptResult.right.join('').replace(regExp, '$& ');

    let leftTableView = '';
    let middleTableView = '';
    let rightTableView = '';
    for (let j = 0; j < secondKey.length; j++) {
        // вырезаем из начала массива одну строку и оборачиваем каждую букву в теги <td></td>
        // а строку в <tr></tr>
        leftTableView += '<tr>' + cryptResult.left.splice(0, firstKey.length).join('').replace(/./g, '<td>$&</td>').toLowerCase() + '</tr>'
        middleTableView += '<tr>' + cryptResult.middle.splice(0, firstKey.length).join('').replace(/./g, '<td>$&</td>').toLowerCase() + '</tr>'
        rightTableView += '<tr>' + cryptResult.right.splice(0, firstKey.length).join('').replace(/./g, '<td>$&</td>').toLowerCase() + '</tr>';
    }

    leftTableView = '<table><caption>Исходное сообщение</caption>' + leftTableView + '</table>';
    middleTableView = '<table><caption>Перестановка столбцов</caption>' + middleTableView + '</table>';
    rightTableView = '<table><caption>Перестановка строк</caption>' + rightTableView + '</table>';

    stop = new Date().getTime();
    alert(stop - start);

    document.getElementById('output').innerHTML = leftTableView + middleTableView + rightTableView;
    document.getElementById('inputMessage').innerText = resultLine.toLowerCase();

}

function encrypt(message, firstKey, secondKey) {
    let result = []; 
    let middle = [];
    let left = []; 
    let colsCount = firstKey.length; 
    let rowsCount = secondKey.length; 
    for (let row = 0; row < rowsCount; row++) {
        for (let col = 0; col < colsCount; col++) {
            let newCol = firstKey[col] - 1;
            let newRow = secondKey[row] - 1;
            left[row * colsCount + col] = message[row * colsCount + col];
            middle[row * colsCount + newCol] = message[row * colsCount + col];
            result[newRow * colsCount + newCol] = message[row * colsCount + col];
        }
    }
    return { left: left, middle: middle, right: result };
}

function decrypt(message, firstKey, secondKey) {
    let result = []; 
    let middle = []; 
    let left = []; 
    let colsCount = firstKey.length; 
    let rowsCount = secondKey.length;
    for (let row = 0; row < rowsCount; row++) {
        for (let col = 0; col < colsCount; col++) {
            let newCol = firstKey[col] - 1;
            let newRow = secondKey[row] - 1;
            left[row * colsCount + col] = message[row * colsCount + col];
            middle[row * colsCount + col] = message[row * colsCount + newCol];
            result[row * colsCount + col] = message[newRow * colsCount + newCol];
        }
    }
    return { left: left, middle: middle, right: result };
}




/*
function spiralArray(rows) {

    start = new Date().getTime();

    let message = "секретное сообщение";
    message = message.replace(/\s/g, '');

    var columns = Math.ceil(message.length / rows);

    if(rows * columns>message.length) {
        for(j=message.length+1; j<=rows * columns; j++) {
            message+="_";
        }
    } 

    console.log(message)

    let arr = new Array(rows).fill().map(() => new Array(columns).fill(0));
    let row = 0;
    let col = 0;
    let direction = 'right';
    for (let i = 0; i < rows * columns; i++) {

        arr[row][col] = message[i] ;
        
        
        if (direction === 'right') {
          if (col === columns - 1 || arr[row][col + 1] !== 0) {
            direction = 'down';
            row++;
        } else {
            col++;
        }
        } else if (direction === 'down') {
            if (row === rows - 1 || arr[row + 1][col] !== 0) {
                direction = 'left';
                col--;
            } else {
                row++;
            }
        } else if (direction === 'left') {
            if (col === 0 || arr[row][col - 1] !== 0) {
                direction = 'up';
                row--;
            } else {
                col--;
            }
        } else if (direction === 'up') {
            if (row === 0 || arr[row - 1][col] !== 0) {
                direction = 'right';
                col++;
            } else {
                row--;
            }
        }
    }

    var result = "";
    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < columns; j++) {
          result += arr[i][j];
      }
    }

    stop = new Date().getTime();

   
    alert(stop - start);



return arr;


}

console.log(spiralArray(4));*/