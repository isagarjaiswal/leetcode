var intersect = function (nums1, nums2) {
    return nums1.reduce((a, c) => {
          if (nums2.includes(c)) {
              a = [...a, c];
              nums2.splice(nums2.indexOf(c), 1)
          }
          return a;
      }, [])
  };