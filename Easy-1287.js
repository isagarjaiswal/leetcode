var findSpecialInteger = function (arr) {
    let size = Math.floor(arr.length / 4);
   for (let i = 0; i < arr.length - size; i++) {
       if (arr[i] === arr[i + size]) {
           return arr[i];
       }
   }
   return -1;
};
