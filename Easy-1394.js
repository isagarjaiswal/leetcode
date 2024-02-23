var findLucky = function (arr) {
    let lucky = -1
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) obj[arr[i]]++
        else obj[arr[i]] = 1
    }
    for(let val in obj){
        if(val==obj[val]) lucky = val
    }
    return lucky
};