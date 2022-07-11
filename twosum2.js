nums2 = [3, 2, 4], target2 = 6
nums = [2, 7, 11, 15], target = 9
nums1 = [3, 3], target1 = 6
nums3 = [1, 3, 4, 2], target3 = 6
var twoSum = function(nums, target) {
    let x = []
    y = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i != j) {
                let result = nums[i] + nums[j]
                    //console.log(result)
                if (result == target) {
                    newX = x.push(i)
                    newX = x.push(j)
                    return (x)

                }
            }
        }


    }
}
console.log(twoSum(nums3, target3))
console.log(twoSum(nums2, target2))
console.log(twoSum(nums1, target1))
console.log(twoSum(nums, target))