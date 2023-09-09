
	function threeSumClosest(nums, target) {
  // Sort the input array in ascending order
  nums.sort((a, b) => a - b);

  // Initialize variables to keep track of the closest sum and the minimum difference
  let closestSum;
  let minDiff = Infinity;

  // Iterate through the array with one fixed element at a time
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      // Calculate the current sum
      const currentSum = nums[i] + nums[left] + nums[right];

      // Calculate the difference between the current sum and the target
      const diff = Math.abs(currentSum - target);

      // If the current difference is smaller than the minimum difference found so far,
      // update the minimum difference and closest sum
      if (diff < minDiff) {
        minDiff = diff;
        closestSum = currentSum;
      }

      // Adjust left and right pointers based on the current sum
      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
 
}

module.exports = threeSum;
