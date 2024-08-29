console.log("Merge sort");

// Merge sort
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    // Take the left half of the arr
    let leftArr = [];
    leftArr = arr.splice(0, Math.floor(arr.length / 2));

    // If leftArr has more than one element, continue taking the left half
    if (leftArr.length > 1) {
        leftArr = mergeSort(leftArr);
    }
    
    let rightArr = arr;
    
    // If rightArr has more than one element, continue taking the left half of the right half
    if (rightArr.length > 1) {
        rightArr = mergeSort(rightArr);
    }
    
    // Merge after 
    arr = merge(leftArr, rightArr);
    return arr;
}

// Merge two sorted arrays
function merge(leftArr, rightArr, arr = []) {
    if (leftArr.length < 1) {
        arr.push(...rightArr);
        return arr;
    } else if (rightArr.length < 1) {
        arr.push(...leftArr);
        return arr;
    }

    if (leftArr[0] < rightArr[0]) {
    // If first element of left array is lesser, push to arr
        arr.push(leftArr[0]);
        leftArr.splice(0, 1);
    } else if (rightArr[0] < leftArr[0]) {
    // Else if first element of right array is lesser, push to arr
        arr.push(rightArr[0]);
        rightArr.splice(0, 1);
    } else {
    // Else first elements of both array are equal, push both to arr
        arr.push(leftArr[0]);
        leftArr.splice(0, 1);
        arr.push(rightArr[0]);
        rightArr.splice(0, 1);
    }
    return merge(leftArr, rightArr, arr);
}

console.log(mergeSort([1]));
console.log(mergeSort([3,2,1,13,8,5,0,1]));
console.log(mergeSort([79,100,105,110]));
console.log(mergeSort([5, 0, 10, -3, -1, 4, 12, -5]));