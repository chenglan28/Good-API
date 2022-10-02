$GAPI = {
    lib:[],
    version:[1,8],
    quote:(lib) => {
        if(!lib){console.error("Unknow Lib Name")}
        else if(lib == "betterTable"){return (a)=>{var r="",i=0;for(;i<a.length;i++){r+="<tr><td>"+a[i].join("</td><td>")+"</td></tr>"}return r}}
        else if(lib == "average"){return (a)=>{var n=0;for(var i =0;i<a.length;i++){n+=a[i]}return n/a.length}}
        else if(lib == "median"){return (a)=>{a=a.sort();if(a.length%2==1){return a[(a.length-1)/2]}else{return(a[a.length/2-1]+a[a.length/2])/2}}}
        else if(lib == "mode"){return (a)=>{if(typeof a=="string"){a=a.split("")};var r=[];for(var i=0;i<a.length;i++){var f=0;for(var j=0;j<r.length;j++){if(r[j][0]==a[i]){f=1;r[j][1]++}}if(f == 0){r.push([a[i],1])}}var j=0;for(var i=0;i<r.length;i++){if(r[i][1]>r[j][1]){j=i}}return r[j][0]}}
        else if(lib == "statistics"){return (ine)=>{if(typeof ine == "number"){ine = ine + ''}ine=ine.split("");var r=[],i=0;for(;i<ine.length;i++){var f=1,j=0;for(;j<r.length;j++){if(r[j].inner==ine[i]){r[j].count++;f=2}}if(f==1){r.push({inner:ine[i],count:1})}}return r}}
        else if(lib == "variance"){return (a)=>{var r =0,n=0;for(var i=0;i<a.length;i++){n+=a[i]};n=n/a.length;for(var i=0;i<a.length;i++){ r+=Math.pow(a[i]-n,2)}return r / a.length}}
        else if(lib == "removeElement"){return (n,v)=>{for(var i=0;i<n.length;i++){if(n[i]==v){n.splice(i,1);i--}}return n.length}}
        else if(lib == "isValidSudoku"){return (b)=>{var r=new Array(9).fill(0).map(_=>new Array(9).fill(0)),c=new Array(9).fill(0).map(_=>new Array(9).fill(0)),l = new Array(3).fill(0).map(_=>new Array(3).fill(0).map(_=>new Array(9).fill(0)));for(var i=0;i<9;i++){for(var j=0;j<9;j++){var val=b[i][j];if(val!=='.'){var ind=Number(val)-1;r[i][ind]++;c[j][ind]++;l[Math.floor(i/3)][Math.floor(j/3)][ind]++;if(r[i][ind]>1||c[j][ind]>1||l[Math.floor(i/3)][Math.floor(j/3)][ind]>1){return false}}}}return true}}
        else if(lib == "object"){return (o)=>{var e=document.querySectorAll(o),r;if(e.length==1){r=e[0];r.forEach=(c)=>{c(r)};r.length=1}else{r=e}r.forEach((c)=>{c.hide=()=>{c._display=c.style.display;c.style.display="none"};c.show=()=>{c.style.display = c._display};c.html=(r)=>{if(r){c.innerHTML=r}else{return c.innerHTML}};c.add=(r)=>{c.innerHTML+=r};c.css=(s,v)=>{if(typeof s=="string"){c.style[s]=v}else{for(var i=0;i<Object.keys(s).length;i++){c.style[Object.keys(s)[i]]=s[Object.keys(s)[i]]}}}});return r}}
        else {
            var script = document.createElement("script");
            script.src = lib;
            document.body.appendChild(script)
        }
    }
}