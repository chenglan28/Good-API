$GAPI = {
    lib:[],
    version:[1,3],
    quote:(lib) => {
        var script = document.createElement("script");
        if(lib == "betterTable")script.src = "object/betterTable-min.js";
        else if(lib == "average")script.src = "object/average-min.js";
        else if(lib == "median")script.src = "object/median-min.js";
        else if(lib == "mode")script.src = "object/mode-min.js";
        document.body.appendChild(script);
        $GAPI.lib.push(lib);
    }
}