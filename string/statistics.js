function statistics(inner){
    if(typeof inner == "number"){
        inner = inner + '';
        inner = inner.split("");
    }
    else if(typeof inner == "string")inner = inner.split("");
    else {
        console.error("Type that cannot be processed");
        return undefined;
    }
    var res = [];
    for(var i = 0;i<inner.length;i++){
        var temp = true;//用于创建新的对象
        for(var j = 0;j<res.length;j++){
            if(res[j].inner == inner[i]){
                res[j].count++;
                temp = false;
            }
        }
        if(temp == true){
            res.push({
                "inner":inner[i],
                "count":1
            });
        }
    }
    return res;
}
