variance = (array)=>{
    var result = 0;
    var n=0;for(var i =0;i<array.length;i++){n+=array[i]};n = n/array.length;
    for(var i = 0;i<array.length;i++){
        result+=Math.pow(array[i] - n,2);
    }
    return result / array.length;
}