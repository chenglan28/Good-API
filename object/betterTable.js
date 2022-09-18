function betterTable(array){
    var result = "";
    for(var i = 0;i<array.length;i++){
        result += "<tr><td>" + array[i].join("</td><td>") + "</td></tr>";
    }
    return result;
}