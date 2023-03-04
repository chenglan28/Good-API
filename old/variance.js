function variance(res){
    var a = average(res);
    var x = 0;
    for(var i = 0;i<res.length;i++){
        x += Math.pow(res[i] - a,2);
    }
    return x / res.length;
}