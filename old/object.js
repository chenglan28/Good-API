function query(object){
    var ele = document.querySelectorAll(object);
    //取出所有匹配元素
    var ret;
    if (ele.length === 1){
        //只有1个元素
        //不适用NodeList节点返回
        ret = ele[0];
        ret.forEach = function(callback){
            //自定义callback函数
            callback(ret);
        };
        ret.length = 1;
    } else ret = ele;
    ret.forEach(function(currentNode){
        currentNode.hide = function(){
            currentNode._display = currentNode.style.display;
            currentNode.style.display = "none";
        };
        currentNode.show = function(){
            currentNode.style.display = currentNode._display;
        };
    });
    return ret;
};
