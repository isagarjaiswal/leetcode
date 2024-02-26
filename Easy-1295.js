function findNumbers(nums) {
    let count= 0;

    for (let i = 0; i < nums.length; i++) {
        let str = String(nums[i]);
        if (str.length % 2 === 0) {
            count++;
        }
    }

    return count;
}