function median(res){
    res = sort(res);
    if(res.length % 2 == 0){
        var x = (res.length - 2) / 2;
        var y = (res.length - 2) / 2 + 1;
        return (res[x] + res[y]) / 2
    }
    else {
        var x = (res.length - 1) / 2;
        return res[x];
    }
}