var countNegatives = function (grid) {
    let count = 0;

    for (let arr of grid) {
        for (let num of arr) {
            if (num < 0) count++
        }
    }
    return count
};