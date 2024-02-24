const intersection = (nums1, nums2) => nums1.reduce((a, c) => (nums2.includes(c) && !a.includes(c) ? [...a, c] : a), []);
