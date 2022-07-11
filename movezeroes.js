nums = [0, 1, 0, 3, 12]
nums1 = [0, 0, 0, 0, 0, 2, 5]
var moveZeroes = function(nums) {
    let array = []
    const result = nums.filter(item => item > 0)
    const zeros = nums.filter(item => item == 0)
    return array = result.concat(zeros)
}
console.log(moveZeroes(nums))
console.log(moveZeroes(nums1))