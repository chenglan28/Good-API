query=(o)=>{var e=document.querySectorAll(o),r;if(e.length==1){r=e[0];r.forEach=(c)=>{c(r)};r.length=1}else{r=e}r.forEach((c)=>{c.hide=()=>{c._display=c.style.display;c.style.display="none"};c.show=()=>{c.style.display = c._display};c.html=(r)=>{if(r){c.innerHTML=r}else{return c.innerHTML}};c.add=(r)=>{c.innerHTML+=r};c.css=(s,v)=>{if(typeof s=="string"){c.style[s]=v}else{for(var i=0;i<Object.keys(s).length;i++){c.style[Object.keys(s)[i]]=s[Object.keys(s)[i]]}}}});return r}