
function route(handle,pathName,response,postData){
	console.log("About to route the request with pathName "+pathName);
	if(typeof handle[pathName] === 'function'){
		return handle[pathName](response,postData);
	}	
	else{
		console.log("No Proper Handle");
		response.writeHead("404",{"Content-Type":"text/plain"});
		response.write("404 :: No Proper Handle");
		response.end();
	}

}

exports.route = route;