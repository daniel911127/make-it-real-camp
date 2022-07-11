//nums = [2, 7, 11, 15], target = 9
//nums1 = [3, 3], target1 = 6
nums2 = [3, 2, 4], target2 = 6
var twoSum = function(nums, target) {
    let x = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = nums.length - 1; j > 0; j--) {
            let result = nums[i] + nums[j]
            if (result == target) {
                x[i] = i
                x[i + 1] = j
                return (x)
            } else {

            }
        }
    }
}

//console.log(twoSum(nums, target))
//console.log(twoSum(nums1, target1))
console.log(twoSum(nums2, target2))