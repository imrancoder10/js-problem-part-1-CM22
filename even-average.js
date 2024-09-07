
function evenNumber(numbers){
    const evenSelector = [];
    for(const even of numbers){
        if(even % 2 === 0){
            evenSelector.push(even);
        }
    }
    let sum = 0;
    for(const even of evenSelector){
        sum += even;
    }
    const count = evenSelector.length;
    resultOfEvenAverage =  sum / count;
    return resultOfEvenAverage.toFixed(3);
}

const evenArray = [2, 3, 5, 8, 4, 9, 2];
const evenAverage = evenNumber(evenArray);
console.log('The even numbers average is : ', evenAverage);