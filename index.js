// Code your solutions in this file
//for (let age = 30; age < 40;  age++) {
//    console.log(`I'm ${age} years old. Happy Birthday to me!`);
//    debugger;
//}

/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow`);
        debugger;
    }
    return gifts;

}
wrapGifts(gifts);
*/

function writeCards(names, event) {
    let arr = [];
    for (let i = 0; i < names.length; i++) {
        arr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return arr;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num --;
    }
}