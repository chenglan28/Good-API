_addEventListener = addEventListener;
document._getAnimations = document.getAnimations;
document._getElementById = document.getElementById;
document._getElementsByClassName = document.getElementsByClassName;
document._getElementsByName = document.getElementsByName;
document._getElementsByTagName = document.getElementsByTagName;
document._getElementsByTagNameNS = document.getElementsByTagNameNS;
document._getRootNode = document.getRootNode;
document._getSelection = document.getSelection;
document._querySelector = document.querySelector;
document._querySelectorAll = document.querySelectorAll;
_alert = alert;
onDOM = [];
onalert = [];
$ = ()=>{
    console.warn("$ function disabled by listener.js")
    return false;
}
addEventListener = (type,listener, options)=>{
    if(type == "onDOM")onDOM.push(listener);
    if(type == "onalert")onalert.push(listener);
    else _addEventListener(type,listener, options);
}

document.getAnimations = (e)=>{
    var f = 1;
    onDOM.forEach(k => {
        if(k({type:"getAnimations",value:e,obj:document._getAnimations(e)}) == false)f = 0;
    });
    if(f == 1)return document._getAnimations(e);
    return [];
}

document.getElementById = (e)=>{
    var f = 1;
    onDOM.forEach(k => {
        if(k({type:"getElementById",value:e,obj:document._getElementById(e)}) == false)f = 0;
    });
    if(f == 1)return document._getElementById(e);
    return undefined;
}

document.getElementsByClassName = (e)=>{
    var f = 1;
    onDOM.forEach(k => {
        if(k({type:"getElementsByClassName",value:e,obj:document._getElementsByClassName(e)}) == false)f = 0;
    });
    if(f == 1)return document._getElementsByClassName(e);
    return [];
}

document.getElementsByName = (e)=>{
    var f = 1;
    onDOM.forEach(k => {
        if(k({type:"getElementsByName",value:e,obj:document._getElementsByName(e)}) == false)f = 0;
    });
    if(f == 1)return document._getElementsByName(e);
    return [];
}

document.getElementsByTagName = (e)=>{
    var f = 1;
    onDOM.forEach(k => {
        if(k({type:"getElementsByTagName",value:e,obj:document._getElementsByTagName(e)}) == false)f = 0;
    });
    if(f == 1)return document._getElementsByTagName(e);
    return [];
}

document.getElementsByTagNameNS = (e)=>{
    var f = 1;
    onDOM.forEach(k => {
        if(k({type:"getElementsByTagNameNS",value:e,obj:document._getElementsByTagNameNS(e)}) == false)f = 0;
    });
    if(f == 1)return document._getElementsByTagNameNS(e);
    return [];
}

document.getRootNode = (e)=>{
    var f = 1;
    onDOM.forEach(k => {
        if(k({type:"getRootNode",value:e,obj:document._getRootNode(e)}) == false)f = 0;
    });
    if(f == 1)return document._getRootNode(e);
    return undefined;
}

document.getSelection = (e)=>{
    var f = 1;
    onDOM.forEach(k => {
        if(k({type:"getSelection",value:e,obj:document._getSelection(e)}) == false)f = 0;
    });
    if(f == 1)return document._getSelection(e);
    return undefined;
}

document.querySelector = (e)=>{
    var f = 1;
    onDOM.forEach(k => {
        if(k({type:"querySelector",value:e,obj:document._querySelector(e)}) == false)f = 0;
    });
    if(f == 1)return document._querySelector(e);
    return undefined;
}

document.querySelectorAll = (e)=>{
    var f = 1;
    onDOM.forEach(k => {
        if(k({type:"querySelectorAll",value:e,obj:document._querySelectorAll(e)}) == false)f = 0;
    });
    if(f == 1)return document._querySelectorAll(e);
    return [];
}

alert = (e)=>{
    var f = 1;
    onalert.forEach(k => {
        if(k({message:e}) == false)f = 0;
    });
    if(f == 1)return _alert(e);
    return undefined;
}