let input = 11;
let balance = input;
let coins = [8,6,5,1];
let result = {};
coins.forEach(coin => {
    if(coin > balance || balance <= 0) {
        return;
    }
    let times = Math.floor(balance / coin);
    let remaining = balance % coin;    
    balance = remaining;
    result[coin] = times;
});

console.log(result);











// const coins = [1,5,6,8];
// const input =  11;
// // 5 coins or 1 coin
// var data = {
//     //  [0,1,2,3,4,5,6,7,8,9,10,11]
//     1 : [0,1,2,3,4,5,6,7,8,9,10,11], // count of coins
//     5 : [0,1,2,3,4,1,2,3,4,5,2,3],
//     6 : [0,1,2,3,4,1,1,2,3,4,2,2],
//     8 : [0,1,2,3,4,1,2,1,2,2,2,2]
// }

// var answer = 2;
// var coins = [6,5];