var removeElement = function(nums, val) {
    var res = []
    for(var i =0; i < nums.length; i++){
        if(nums[i] != val){
            res.push(nums[i]);
        }
    }
    return res
};