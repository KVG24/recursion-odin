function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);
    return mergeArrays(mergeSort(left), mergeSort(right));
}

function mergeArrays(leftArray, rightArray) {
    let result = [];
    while (leftArray.length !== 0 && rightArray.length !== 0) {
        if (leftArray[0] < rightArray[0]) {
            result.push(leftArray.shift());
        } else {
            result.push(rightArray.shift());
        }
    }
    while (leftArray.length !== 0) {
        result.push(leftArray.shift());
    }
    while (rightArray.length !== 0) {
        result.push(rightArray.shift());
    }
    return result;
}

let test = [3, 2, 1, 13, 8, 5, 0, 1, 8, 6, 10, 12, 9];

console.log(mergeSort(test));
