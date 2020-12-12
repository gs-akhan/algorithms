function bubbleSort(array) {

    let swaped = true;

    while (swaped) {
        swaped = false;
        for (let i = 0; i < array.length; i++) {
            for (let j = i+1; j < array.length; j++) {
                if (array[i] > array[j]) {
                    let temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                    swaped = true;
                }
            }
        }
    }

    return array;
}

console.log(bubbleSort([2, 5, 67, 1, -100, -29999]));