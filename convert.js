// 12 inch 1 feet

function inchToFeet(inch){
    const feet = inch * 0.0833333;
    return feet;
}

const height = inchToFeet(75);
// console.log(height);

// ==================================================

function manHeight(inch){
    const feet = inch / 12;
    const inchRem = inch % 12;
    const result = parseInt(feet) + ' ft ' + inchRem + ' inch';
    return result;
}

const manHeightFinal = manHeight(75);
// console.log(manHeightFinal);


// ======================================================

function mileToKilometer(mile){
    const kilometer = mile * 1.60934;
    return kilometer;
}

const kilometer = mileToKilometer(7);
// console.log(kilometer);

// ================================================================

function kilometerToMile(kilometer){
    const mile = kilometer * 0.621371;
    return mile;
}

const mile = kilometerToMile(11);
console.log(mile);