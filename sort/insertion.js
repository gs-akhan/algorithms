function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let a = i;
        while (a >= 0) {
            if (array[a] < array[a - 1]) {
                let temp = array[a];
                array[a] = array[a - 1];
                array[a - 1] = temp;
            }
            a--;
        }
    }

    return array;
}
console.log(insertionSort([1, 3, 5, 2, 0.5, 6, -190]));