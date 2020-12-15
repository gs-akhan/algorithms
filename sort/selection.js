/**
 *  We loop through array and find the minimum value and place it at the
 * center of the array. 
 * 
 * 
 * Then we start from the 1st index and find the minimum value from 1 .. len - 1
 * and place it at the 1st position.
 */

function selectionSort(array) {

    for (let i = 0; i < array.length; i++) {

        let lowest = Number.MAX_SAFE_INTEGER;
        let lowestIndex = 0;
        for (let k = i; k < array.length; k++) {
            if (array[k] < lowest) {
                lowest = array[k];
                lowestIndex = k;
            }
        }
        array.splice(lowestIndex, 1);
        array.splice(i, 0, lowest);
    }

    return array;
}


console.log(selectionSort([1, 3, 5, 2, 0.5, 6, -190]));