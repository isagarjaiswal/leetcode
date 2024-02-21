// one Line

var busyStudent = function (startTime, endTime, queryTime) {
    return startTime.reduce((a, n, i) => n <= queryTime && endTime[i] >= queryTime ? a += 1 : a, 0)
};

var busyStudent = function (startTime, endTime, queryTime) {
    let count = 0;
    for (let i = 0; i < startTime.length; i++) {
        if (startTime[i] === queryTime || endTime[i] === queryTime) {
            count++
        } else if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
            count++
        }
    }
    return count
};