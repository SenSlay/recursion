console.log("Fibs");

// Fibonnaci sequence iterative implementation
function fibs(n) {
    if (n <= 0) {
        return "Invalid number of elements";
    } else if (n == 1) {
        return [0];
    } else if (n == 2) {
        return [0, 1];
    }

    let arr = [0, 1];
    for (let i = 1; i < n - 1; i++) {
        let value = arr[i - 1] + arr[i];
        arr.push(value);
    }
    return arr;
}

console.log(fibs(8));

// Fibonnaci sequence recursive implementation
function fibsRec(n, arr = [0, 1]) {
    if (n <= 0) {
        return "Invalid number of elements";
    } else if (n == 1) {
        return [0];
    } else if (n == 2) {
        return arr;
    }
    
    let value = arr[arr.length - 2] + arr[arr.length - 1];
    arr.push(value);

    return fibsRec(n - 1, arr);
}

console.log(fibsRec(8));
