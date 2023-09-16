function threeSumClosest(nums, target) {
  

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            // Update the closest sum
            if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
                closestSum = sum;
            }

            // Adjust pointers based on the current sum
            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closestSum;
}

