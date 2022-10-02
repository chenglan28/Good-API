function median(array){
    array = array.sort();
    if(array.length % 2 == 1)return array[(array.length-1) / 2]
    else return (array[array.length / 2 - 1] + array[array.length / 2]) / 2
}