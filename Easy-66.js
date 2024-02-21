var plusOne = function (digits) {
    let str = ""
    for (let i = 0; i < digits.length; i++) {
        str += digits[i];
    }
    let num = BigInt(str) + 1n
    return String(num).split("").map(n => Number(n))
};