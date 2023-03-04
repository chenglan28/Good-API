function average(res){
	var x = 0;
	for(var i = 0;i<res.length;i++){
		x += res[i];
	}
	return x / res.length;
}