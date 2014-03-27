var fs = require("fs");
var queryString = require("querystring");

function start(response,postData){
	console.log("Request Handler start was called ");
	
	var body = '<html>'+
				'<head>'+
				'<meta http-equiv="Content-Type" content="text/html; '+
				'charset=UTF-8" />'+
				'</head>'+
				'<body>'+
				 '<form action="/upload" enctype="multipart/form-data" method="post">'+
				 '<input type="file" name="upload">'+
				 '<input type="submit" value="Upload File" />'+
				 '</form>'+
				 '</body>'+
				 '</html>';
	
		response.writeHead(200,{"Content-Type":"text/html"});
		response.write(body);
		response.end();
	
	
}
function upload(response,postData){
	console.log("Request handler upload was called");
	response.writeHead(200,{"Content-Type":"text/plain"});
		response.write("You have posted the text "+queryString.parse(postData).text);
		response.end();
}

function show(response){
	response.writeHead(200,{"Content-Type":"image/jpg"});
	fs.createReadStream("/Users/gshanka/Downloads/Panditji.jpg").pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;