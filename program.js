const express = require('express');
var application = express();
const body_parser = require('body-parser');
// entitys start
const director = require('./Models/Director');
const movie = require('./Models/Movie');
const bodyParser = require('body-parser');
// entitys end

//router start
var directorRouter = require('./Routers/Director');
var movieRouter = require('./Routers/Movie');
//router end







middlewareconfig = ()=>{
    application.use(body_parser.urlencoded({extended:true}));
    application.use(bodyParser.json());
    application.use(directorRouter);
    application.use(movieRouter);
}


middlewareconfig();
movie.sync();
director.sync();

application.listen(3000, () => {
   
    console.log("3000 portu dinlemede");
});
