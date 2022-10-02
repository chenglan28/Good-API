$GAPI = {
    lib:[],
    version:[1,3],
    quote:(lib) => {
        if(lib == "betterTable")return (a)=>{var r="",i=0;for(;i<a.length;i++){r+="<tr><td>"+a[i].join("</td><td>")+"</td></tr>"}return r}
        else if(lib == "average")return (a)=>{var n=0;for(var i =0;i<a.length;i++){n+=a[i]}return n/a.length}
        else if(lib == "median")return (a)=>{a=a.sort();if(a.length%2==1){return a[(a.length-1)/2]}else{return(a[a.length/2-1]+a[a.length/2])/2}}
        else if(lib == "mode")return (a)=>{if(typeof a=="string"){a=a.split("")};var r=[];for(var i=0;i<a.length;i++){var f=0;for(var j=0;j<r.length;j++){if(r[j][0]==a[i]){f=1;r[j][1]++}}if(f == 0){r.push([a[i],1])}}var j=0;for(var i=0;i<r.length;i++){if(r[i][1]>r[j][1]){j=i}}return r[j][0]}
        else if(lib == "statistics")return (ine)=>{if(typeof ine == "number"){ine = ine + ''}ine=ine.split("");var r=[],i=0;for(;i<ine.length;i++){var f=1,j=0;for(;j<r.length;j++){if(r[j].inner==ine[i]){r[j].count++;f=2}}if(f==1){r.push({inner:ine[i],count:1})}}return r}
        else if(lib == "variance")return (a)=>{var r =0,n=0;for(var i=0;i<a.length;i++){n+=a[i]};n=n/a.length;for(var i=0;i<a.length;i++){ r+=Math.pow(a[i]-n,2)}return r / a.length}
        else {
            var script = document.createElement("script");
            script.src = lib;
            document.body.appendChild(script);
        }
    }
}