/**
 * Year will be a leap year if the year is divisiable by 4
 */

function isLeapYear(year){
    if(year % 400 === 0){
        return true;
    }
    else if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else{
        return 'No Leap year.';
    }
}

const leapYear = isLeapYear(2100);
console.log(leapYear);