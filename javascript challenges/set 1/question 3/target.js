function twoSum(nums, target) {
  for (i = 0; i < nums.length - 1; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log([i, j]);
      }
    }
  }
}
twoSum([2, 3, 4, 6], 7);







const t = [3, 4, 5, 6, 7];
for (i = 0; i < t.length - 1; i++) {
  for (j = i + 1; j < t.length; j++) {
    console.log(i, j);
  }
}
