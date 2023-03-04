function sort(res){
    for(var i = 0;i<res.length;i++){
        for(var j = 0;j<res.length;j++){
            if(res[j] > res[j + 1]){
                var x = res[j];
                res[j] = res[j + 1];
                res[j + 1] = x;
            }
        }
    }
    return res;
}
function asort(res){
    for(var i = 0;i<res.length;i++){
        for(var j = 0;j<res.length;j++){
            if(res[j] < res[j + 1]){
                var x = res[j];
                res[j] = res[j + 1];
                res[j + 1] = x;
            }
        }
    }
    return res;
}