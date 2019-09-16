var assert = require("assert");

function towerOfHanoi(s,d,e,n) {
    if(n < 1) return;

    towerOfHanoi(s,e,d,n-1);
    console.log(`Move dist ${n} from ${s} to ${d}`);
    towerOfHanoi(e,d,s,n-1);
}

towerOfHanoi("s", "d", "e", 3);