const today = new Date();
// console.log(today);
const date = new Date('2025-10-02');
// console.log(date);
console.log(date.getMonth());
console.log(date.getDay());

const specificDate = new Date(2091, 8, 8);
console.log(specificDate.toLocaleString('en-GB'));