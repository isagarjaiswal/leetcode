var reverseString = function (s) {
    let start = 0;
    let end = s.length - 1

    while (start <= end) {
        [s[start], s[end]] = [s[end], s[start]]
        start++;
        end--
    }
};
const a = reverseString(["A", " ", "m", "a", "n", ",", " ", "a", " ", "p", "l", "a", "n", ",", " ", "a", " ", "c", "a", "n", "a", "l", ":", " ", "P", "a", "n", "a", "m", "a"])
console.log(a);

