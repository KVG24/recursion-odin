function fibs(n) {
    let result = [0, 1];
    if (n > 2) {
        for (let i = 0; i < n - 2; i++) {
            let sum = result[result.length - 1] + result[result.length - 2];
            result.push(sum);
        }
    } else {
        return result.slice(0, n);
    }
    return result;
}

console.log("Loop fibonacci function: " + fibs(8));

function fibsRec(n) {
    if (n <= 2) {
        return [0, 1].slice(0, n);
    }
    let result = fibsRec(n - 1);
    result.push(result[result.length - 1] + result[result.length - 2]);
    return result;
}

console.log("Recursive fibonacci function: " + fibsRec(8));
