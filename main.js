alert('Введите первую строку:');
const firstRow = prompt();
alert('Введите вторую строку:');
const secondRow = prompt();

function getRow(firstRow, secondRow) {
     let firstRowCounter = 0, secondRowCounter = 0;
     for (let i = 0; i < firstRow.length; i++) {
        if (firstRow.charAt([i]) == 'а') {
            firstRowCounter++;
        }  
    }
    for (let i = 0; i < secondRow.length; i++) {
        if (secondRow.charAt([i]) == 'а') {
            secondRowCounter++;
        }  
    }

    if (firstRowCounter > secondRowCounter) {
        alert(`Больше 'а' в строке: ${firstRow}`);
    } else {
        alert(`Больше 'а' в строке: ${secondRow}`);
    }
}   

getRow(firstRow, secondRow);

