nums = [0, 1, 0, 3, 12]
    //nums1 = [0, 0, 0, 0, 0, 2, 5]
var moveZeroes = function(nums) {
    let pos = nums.length - 1;
    let tmp;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] == 0) {
            tmp = nums[i];
            for (let j = i; j < pos; j++) {
                nums[j] = nums[j + 1];
            }
            nums[pos--] = tmp;
        }
    }
    return nums;
}

console.log(moveZeroes(nums))
    //console.log(moveZeroes(nums1))