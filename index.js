/*
A basic Node.js powered site to convert a supplied CSV based spreadsheet into object notation JSON.
*/
// require our dependencies
var express        	= require('express');
var expressLayouts 	= require('express-ejs-layouts');
var bodyParser     	= require('body-parser');
var app            	= express();
var Converter = require("csvtojson").Converter; // use the csv2json library instead of papaparser.js 
var port           	= process.env.PORT || 8000;
var csv2json     	= require('csv2json');


// use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

// use body parser
app.use(bodyParser.urlencoded({ extended: true }));

// route our app
var router = require('./app/routes');
app.use('/', router);


// set static files (css and images, etc) location
app.use(express.static(__dirname + '/public'));


// CSV to JSON conversion using CSV2JSON library.
// using hard-coded csv file path. Fix this!!
var converter = new Converter({});
converter.fromFile("sample_csvs/testcsv.csv",function(err,result){
    // error trapping here!
    if(err){
        console.log("Oops! Something went wrong.");
        console.log(err);  
    } 

    var ourJSONresult = result;  // store the conversion results
    
    // log JSON result to confirm it succeeded
    console.log(ourJSONresult);
});



// start the server
app.listen(port, function() {
  // console.log('web app started');
  console.log('Web app started on port ' + port + ' and available at http://localhost:' + port + '/. Enjoy!');
});

