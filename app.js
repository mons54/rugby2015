var connect		= require('connect'),
    express		= require('express'),
    app			  = express();

global.dirname 	= __dirname;

require(dirname + '/server/config')(app, express, connect);
require(dirname + '/server/routes')(app);

app.listen(8080);
console.info("server run at http://localhost:8080/");
