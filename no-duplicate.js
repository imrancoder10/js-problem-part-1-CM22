/***
 * array has some duplicate elements
 * []
 */

function noDuplicate(members){
    // console.log(members);
    const unique = [];
    for(const name of members){
        if(unique.includes(name) === false ){
            unique.push(name);
        }
    }
    return unique;
}


const eatMorePerson = ['amena', 'kamena', 'amena', 'pabena', 'kamena'];
const numbers = [25, 10, 23, 10, 25, 11, 18, 23, 16];
// const uniqueName = noDuplicate(eatMorePerson);
const uniqueNumber = noDuplicate(numbers);
// console.log(uniqueName);
console.log(uniqueNumber);