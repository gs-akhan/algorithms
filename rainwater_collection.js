
const bricks = [5,0,0,0,1,2,5];

function get_rain_water(start_index = 0) {

    if(start_index >= bricks.length - 1) {
        return 0;
    }
    let start_height = bricks[start_index];

    //check if the initials are empty and find new start index
    
    let right_max_index = find_right_max(start_index, bricks)[1];
    if(start_index === right_max_index) {
        right_max_index = find_right_max(start_index + 1, bricks)[1];
        start_height = bricks[right_max_index];
        
    }

    //compute the area.
    
    let completeArea = start_height * 2;
    if(bricks[start_index] < bricks[start_index -1]) {
        completeArea = bricks[right_max_index] * 2
    }

    let middleArea = 0;
    for(let i = start_index + 1 ; i < right_max_index; i ++) {
        middleArea += bricks[i];
        completeArea += start_height;
    }

    let temp =  (completeArea - (middleArea + start_height * 2));
    return temp + get_rain_water(right_max_index);
    
}


function find_right_max(startIndex, array) {

    let max = array[startIndex];
    let max_index = startIndex;
    for(let i =startIndex; i < array.length; i++){
        //console.log(array[i])
        if(array[i] >= max && i !== startIndex) {
            max = array[i];
            max_index = i;
            break;
        }
    }
    return [max, max_index];
}

//console.log(find_right_max(3, bricks))
console.log(get_rain_water(0))
function assert(a, b) {
    if(a.toString() === b.toString()) {
        console.log("pass");
    } else {
       console.error("Failed");
    }
}