function mode(array){
    if(typeof array == "string")array = array.split("");
    var result = [];
    for(var i = 0;i<array.length;i++){
        var flag = 0;
        for(var j = 0;j<result.length;j++){
            if(result[j][0] == array[i]){
                flag = 1;
                result[j][1]++;
            }
        }
        flag == 0 && result.push([array[i],1]);
    }
    var j = 0;
    for(var i =0;i<result.length;i++){
        if(result[i][1] > result[j][1])j = i;
    }
    return result[j][0];
}