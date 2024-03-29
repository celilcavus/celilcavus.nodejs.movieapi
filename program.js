const express = require('express');
var application = express();
const body_parser = require('body-parser');
const bodyParser = require('body-parser');


// entitys start
const director = require('./Models/Director');
const movie = require('./Models/Movie');
// entitys end

//router start
var directorRouter = require('./Routers/Director');
var movieRouter = require('./Routers/Movie');
//router end







middlewareconfig = ()=>{
    application.use(body_parser.urlencoded({extended:true}));
    application.use(bodyParser.json());
    application.use(directorRouter);
    application.use(movieRouter)
}



middlewareconfig();
movie.sync({force:true});
director.sync({force:true});

application.get('/',(req,res)=>{
    res.send("hello");
})

application.listen(3000, () => {
    console.log("3000 portu dinlemede");
});
