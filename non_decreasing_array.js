function non_decreasing_array(array) {

    let count = 0;

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] >= array[i + 1]) {
            count++;
            console.log("greater");
            if (count > 1) {
                return false;
            }
            if (array[i - 1] > array[i + 1]) {
                array[i + 1] = array[i];
            } else {
                array[i] = array[i + 1];
            }
        }
    }
    return true;
    
}

console.log(non_decreasing_array([4, 2, 3]) === true);
console.log(non_decreasing_array([4, 2, 1]) === false);
console.log(non_decreasing_array([3, 4, 2, 3]) === false);
// /console.log(non_decreasing_array());