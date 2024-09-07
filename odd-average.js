/**
 * Function takes an array as parameter
 * give me the average of the odd numbers in the array.
 * 
 * 1. put odd number in a array.
 */


function oddAverage(numbers){
    const oddArray = [];
    let sum = 0;
    for(const odd of numbers){
        if(odd % 2 === 1){
            oddArray.push(odd);
            sum += odd;
        }
    }
    const oddAverage = sum / oddArray.length;
    return oddAverage;
}

const roll = [2, 6, 8, 9, 7, 5];
const oddAverageResult = oddAverage(roll);
console.log('average of the odd number is: ', oddAverageResult);





// =================================================

function oddNumber(number){
    oddArray = [];
    for(const odd of number){
        if(odd % 2 === 1){
            oddArray.push(odd);
        }
    }
    return oddArray;    
}

const array = [5, 2, 9, 8, 7, 10];
const finalOdd = oddNumber(array);
// console.log(finalOdd);


// ==========================================================


function oddNumbers(numbers){
    sum = 0;
    for(const odd of numbers){
        if(odd % 2 === 1){
            sum += odd;
        }
    }
    return sum;
}
const age = [5, 2, 9, 8, 7, 3];
const oddSum = oddNumbers(age);
// console.log(oddSum);

