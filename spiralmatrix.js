var inputArray = [
    [],
    [],
    [],
    [],
    []
];


let height = 5;
let width = 5;


let top =0;
let right = 4;
let bottom = 4;
let left = 0;
let counter = 0;


while(bottom >= bottom && right >= left) {
    for(let i = top; i <= right; i++) {
        inputArray[top][i] = counter;
        counter++;
    }
    top++
    
    for(let i = top; i <= right; i++) {
        inputArray[i][right] = counter;
        counter++;
    }
    right--;
    
    
    for(let i = right; i >= left; i--) {
        inputArray[bottom][i] = counter;
        counter++;
    }
    bottom--;
    
    for(let i = bottom; i >= top; i--) {
        inputArray[i][left] = counter;
        counter++
    }
    left++;    
}

console.log(inputArray);
